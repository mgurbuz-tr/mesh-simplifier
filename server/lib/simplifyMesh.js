import { weld, simplify } from '@gltf-transform/functions';
import { getSimplifier } from './io.js';
import { countStats } from './stats.js';

/**
 * Document'ı verilen oranda yerinde (mutating) basitleştirir.
 * QEM edge-collapse (meshoptimizer).
 *
 * Kritik: simplify ÖNCESİ weld zorunlu. Ama STL gibi formatlar yüzey-başına DÜZ
 * normal saklar → paylaşılan vertex'ler farklı normallere sahip olur → weld onları
 * birleştiremez → mesh "üçgen-çorbası" kalır → hiç azalmaz. Bu yüzden normalleri
 * ATIP pozisyon(+UV) üzerinden weld ediyor, sonra PÜRÜZSÜZ normalleri yeniden
 * hesaplıyoruz. (UV dikişleri korunur: aynı pozisyon + farklı UV birleşmez.)
 *
 * @param {import('@gltf-transform/core').Document} document
 * @param {number} ratio  Korunacak üçgen oranı (0–1)
 * @returns {Promise<{triangles:number, vertices:number}>}
 */
export async function simplifyDocument(document, ratio) {
  const simplifier = await getSimplifier();

  stripNormals(document);

  if (ratio < 0.999) {
    await document.transform(
      weld(),
      // error: 1 (büyük tolerans) → kısıt 'ratio' olur; kullanıcının istediği orana
      // mümkün olduğunca yaklaşır. lockBorder kapalı (orana ulaşmayı önceler).
      simplify({ simplifier, ratio, error: 1, lockBorder: false })
    );
  } else {
    await document.transform(weld()); // sadece indeksle
  }

  recomputeSmoothNormals(document);
  return countStats(document);
}

/** Tüm primitive'lerden NORMAL özniteliğini kaldırır. */
function stripNormals(document) {
  for (const mesh of document.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      const n = prim.getAttribute('NORMAL');
      if (n) {
        prim.setAttribute('NORMAL', null);
        if (n.listParents().length <= 1) n.dispose();
      }
    }
  }
}

/**
 * İndeksli geometride alan-ağırlıklı pürüzsüz vertex normalleri hesaplar.
 * (gltf-transform'un normals() transform'u unweld edip DÜZ normal üretir — istemiyoruz.)
 */
function recomputeSmoothNormals(document) {
  const buffer = document.getRoot().listBuffers()[0] || document.createBuffer();
  for (const mesh of document.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      const pos = prim.getAttribute('POSITION');
      const idx = prim.getIndices();
      if (!pos || !idx) continue;

      const P = pos.getArray();
      const I = idx.getArray();
      const N = new Float32Array(pos.getCount() * 3);

      for (let t = 0; t < I.length; t += 3) {
        const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3;
        const ax = P[a], ay = P[a + 1], az = P[a + 2];
        const e1x = P[b] - ax, e1y = P[b + 1] - ay, e1z = P[b + 2] - az;
        const e2x = P[c] - ax, e2y = P[c + 1] - ay, e2z = P[c + 2] - az;
        // Çapraz çarpım (alan-ağırlıklı: normalize etmeden biriktir).
        const nx = e1y * e2z - e1z * e2y;
        const ny = e1z * e2x - e1x * e2z;
        const nz = e1x * e2y - e1y * e2x;
        N[a] += nx; N[a + 1] += ny; N[a + 2] += nz;
        N[b] += nx; N[b + 1] += ny; N[b + 2] += nz;
        N[c] += nx; N[c + 1] += ny; N[c + 2] += nz;
      }
      for (let i = 0; i < N.length; i += 3) {
        const len = Math.hypot(N[i], N[i + 1], N[i + 2]) || 1;
        N[i] /= len; N[i + 1] /= len; N[i + 2] /= len;
      }

      prim.setAttribute('NORMAL', document.createAccessor().setType('VEC3').setArray(N).setBuffer(buffer));
    }
  }
}
