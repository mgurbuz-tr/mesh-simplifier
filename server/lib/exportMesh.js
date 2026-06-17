import JSZip from 'jszip';
import { meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder } from 'meshoptimizer';
import { getIO } from './io.js';

// ---------------------------------------------------------------------------
// GLB: gltf-transform NodeIO ile binary yaz (materyal + tekstür gömülü tek dosya).
//
// compress=true → EXT_meshopt_compression (reorder + quantize + meshopt).
// KRİTİK: Sıkıştırılmış bir girdiyi (Draco/meshopt) açıp sıkıştırmasız yazarsak
// dosya orijinalden BÜYÜK çıkar. Bu yüzden çıktıları (download + viewport) yeniden
// sıkıştırıyoruz. İstemci tarafı GLTFLoader meshopt decoder ile bunları çözer.
// ---------------------------------------------------------------------------
export async function toGLB(document, { compress = false } = {}) {
  const io = await getIO();
  if (compress) {
    await MeshoptEncoder.ready;
    await document.transform(meshopt({ encoder: MeshoptEncoder, level: 'high' }));
  }
  return io.writeBinary(document); // Uint8Array
}

// ---------------------------------------------------------------------------
// OBJ + MTL + PNG: Document'tan .obj (geometri) + .mtl (materyal) + doku dosyaları
// üretip ZIP'ler. OBJ tek dosyada tekstür tutamaz; bu yüzden çoklu dosya paketi.
// ---------------------------------------------------------------------------
export async function toOBJZip(document, baseName) {
  const prims = collectPrimitives(document);

  const obj = [`# Mesh Studio export`, `mtllib ${baseName}.mtl`];
  const mtl = [];
  const textures = []; // { name, data:Buffer }
  const matNames = new Map(); // Material -> mtl adı
  const texFiles = new Map(); // Texture -> dosya adı

  let vOff = 1;
  let vtOff = 1;
  let vnOff = 1;

  prims.forEach(({ prim, matrix }, i) => {
    const pos = prim.getAttribute('POSITION');
    if (!pos) return;
    const normal = prim.getAttribute('NORMAL');
    const uv = prim.getAttribute('TEXCOORD_0');
    const indices = prim.getIndices();
    const count = pos.getCount();
    const posArr = pos.getArray();

    const mtlName = ensureMaterial(prim.getMaterial(), mtl, textures, matNames, texFiles, baseName);

    obj.push(`o part_${i}`);

    for (let v = 0; v < count; v++) {
      const p = transformPoint(matrix, posArr[v * 3], posArr[v * 3 + 1], posArr[v * 3 + 2]);
      obj.push(`v ${p[0]} ${p[1]} ${p[2]}`);
    }
    if (uv) {
      const a = uv.getArray();
      for (let v = 0; v < count; v++) obj.push(`vt ${a[v * 2]} ${1 - a[v * 2 + 1]}`); // OBJ V eksenini ters çevir
    }
    if (normal) {
      const a = normal.getArray();
      for (let v = 0; v < count; v++) {
        const n = transformDir(matrix, a[v * 3], a[v * 3 + 1], a[v * 3 + 2]);
        const len = Math.hypot(n[0], n[1], n[2]) || 1;
        obj.push(`vn ${n[0] / len} ${n[1] / len} ${n[2] / len}`);
      }
    }

    obj.push(`usemtl ${mtlName}`);

    const idx = indices ? indices.getArray() : null;
    const triCount = idx ? idx.length / 3 : count / 3;
    for (let t = 0; t < triCount; t++) {
      const a = idx ? idx[t * 3] : t * 3;
      const b = idx ? idx[t * 3 + 1] : t * 3 + 1;
      const c = idx ? idx[t * 3 + 2] : t * 3 + 2;
      obj.push(faceLine(a, b, c, vOff, vtOff, vnOff, !!uv, !!normal));
    }

    vOff += count;
    if (uv) vtOff += count;
    if (normal) vnOff += count;
  });

  const zip = new JSZip();
  zip.file(`${baseName}.obj`, obj.join('\n'));
  zip.file(`${baseName}.mtl`, mtl.join('\n'));
  for (const t of textures) zip.file(t.name, t.data);
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}

// ---- Materyal / tekstür ----
function ensureMaterial(mat, mtl, textures, matNames, texFiles, baseName) {
  if (!mat) {
    if (!matNames.has('__default')) {
      matNames.set('__default', 'default');
      mtl.push('newmtl default', 'Kd 0.8 0.8 0.8', 'd 1.0', 'illum 2', '');
    }
    return 'default';
  }
  if (matNames.has(mat)) return matNames.get(mat);

  const name = (mat.getName() || `material_${matNames.size}`).replace(/[^a-zA-Z0-9_]/g, '_') || `material_${matNames.size}`;
  matNames.set(mat, name);

  const base = mat.getBaseColorFactor() || [0.8, 0.8, 0.8, 1];
  mtl.push(`newmtl ${name}`);
  mtl.push(`Kd ${base[0]} ${base[1]} ${base[2]}`);
  mtl.push(`d ${base[3] ?? 1}`);
  mtl.push('illum 2');

  const tex = mat.getBaseColorTexture?.();
  if (tex) {
    let file = texFiles.get(tex);
    if (!file) {
      const img = tex.getImage(); // Uint8Array | null
      if (img) {
        const mime = tex.getMimeType?.() || 'image/png';
        const ext = mime.includes('jpeg') || mime.includes('jpg') ? 'jpg' : mime.includes('png') ? 'png' : 'bin';
        file = `${baseName}_tex${texFiles.size}.${ext}`;
        texFiles.set(tex, file);
        textures.push({ name: file, data: Buffer.from(img) });
      }
    }
    if (file) mtl.push(`map_Kd ${file}`);
  }
  mtl.push('');
  return name;
}

function faceLine(a, b, c, vO, vtO, vnO, hasUV, hasN) {
  const ref = (i) => {
    const v = i + vO;
    if (hasUV && hasN) return `${v}/${i + vtO}/${i + vnO}`;
    if (hasUV) return `${v}/${i + vtO}`;
    if (hasN) return `${v}//${i + vnO}`;
    return `${v}`;
  };
  return `f ${ref(a)} ${ref(b)} ${ref(c)}`;
}

// ---- Scene graph gezerek world matrislerini hesapla, primitive'leri topla ----
function collectPrimitives(document) {
  const out = [];
  const root = document.getRoot();
  const scene = root.getDefaultScene() || root.listScenes()[0];
  if (!scene) return out;

  const walk = (node, parent) => {
    const local = fromTRS(node.getTranslation(), node.getRotation(), node.getScale());
    const world = multiply(parent, local);
    const mesh = node.getMesh();
    if (mesh) for (const prim of mesh.listPrimitives()) out.push({ prim, matrix: world });
    for (const child of node.listChildren()) walk(child, world);
  };
  for (const node of scene.listChildren()) walk(node, IDENTITY);
  return out;
}

// ---- Minimal mat4 (column-major) ----
const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

function fromTRS(t, q, s) {
  const [x, y, z, w] = q;
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  const [sx, sy, sz] = s;
  return [
    (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,
    (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0,
    (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0,
    t[0], t[1], t[2], 1,
  ];
}

function multiply(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      o[c * 4 + r] =
        a[0 * 4 + r] * b[c * 4 + 0] +
        a[1 * 4 + r] * b[c * 4 + 1] +
        a[2 * 4 + r] * b[c * 4 + 2] +
        a[3 * 4 + r] * b[c * 4 + 3];
    }
  }
  return o;
}

function transformPoint(m, x, y, z) {
  return [
    m[0] * x + m[4] * y + m[8] * z + m[12],
    m[1] * x + m[5] * y + m[9] * z + m[13],
    m[2] * x + m[6] * y + m[10] * z + m[14],
  ];
}

function transformDir(m, x, y, z) {
  return [
    m[0] * x + m[4] * y + m[8] * z,
    m[1] * x + m[5] * y + m[9] * z,
    m[2] * x + m[6] * y + m[10] * z,
  ];
}
