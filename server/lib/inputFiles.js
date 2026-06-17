import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import JSZip from 'jszip';
import { TMP_DIR } from './paths.js';

const MESH_EXTS = new Set(['.glb', '.gltf', '.obj', '.stl', '.ply']);
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg']);
const RELEVANT = new Set([...MESH_EXTS, ...IMAGE_EXTS, '.mtl']);

/**
 * Yüklenen dosyaları (çoklu dosya VEYA tek bir .zip) çözümler:
 *  - birincil mesh dosyasını,
 *  - (OBJ için) baseColor dokusunu (MTL'deki map_Kd ile eşleştirir, yoksa ilk görseli)
 * belirler. Zip ise içeriği TMP_DIR'e açar (sonra cleanup() ile silinmeli).
 *
 * @param {Array<{path:string, originalname:string}>} files  multer dosyaları
 * @returns {Promise<{ primary:{path,ext,name}, texture:{data:Uint8Array,mime:string}|null, tempPaths:string[] }>}
 */
export async function resolveInput(files) {
  const tempPaths = files.map((f) => f.path);
  let list = files.map((f) => ({
    path: f.path,
    ext: path.extname(f.originalname).toLowerCase(),
    name: f.originalname,
  }));

  // Tek .zip → içeriği aç ve listeyi onunla değiştir.
  if (list.length === 1 && list[0].ext === '.zip') {
    const extracted = await extractZip(list[0].path);
    tempPaths.push(...extracted.map((e) => e.path));
    list = extracted;
  }

  const primary = list.find((f) => MESH_EXTS.has(f.ext));
  if (!primary) {
    throw new Error('Mesh dosyası bulunamadı (.glb/.gltf/.obj/.stl/.ply)');
  }

  const images = list.filter((f) => IMAGE_EXTS.has(f.ext));
  const mtl = list.find((f) => f.ext === '.mtl');

  let chosen = images[0] || null;
  if (mtl && images.length > 1) {
    // MTL'deki map_Kd dosya adıyla eşleştir.
    try {
      const text = await fs.readFile(mtl.path, 'utf8');
      const m = text.match(/^\s*map_Kd\s+(.+)\s*$/im);
      if (m) {
        const want = path.basename(m[1].trim().replace(/\\/g, '/'));
        const hit = images.find((t) => path.basename(t.name) === want);
        if (hit) chosen = hit;
      }
    } catch {
      /* yoksay */
    }
  }

  let texture = null;
  if (chosen) {
    const data = await fs.readFile(chosen.path);
    texture = {
      data: new Uint8Array(data),
      mime: chosen.ext === '.png' ? 'image/png' : 'image/jpeg',
    };
  }

  return { primary, texture, tempPaths };
}

async function extractZip(zipPath) {
  const zip = await JSZip.loadAsync(await fs.readFile(zipPath));
  const out = [];
  for (const [name, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const ext = path.extname(name).toLowerCase();
    if (!RELEVANT.has(ext)) continue;
    const data = await entry.async('nodebuffer');
    const outPath = path.join(TMP_DIR, `${crypto.randomUUID()}${ext}`);
    await fs.writeFile(outPath, data);
    out.push({ path: outPath, ext, name: path.basename(name) });
  }
  return out;
}

export async function cleanupTemp(tempPaths) {
  await Promise.all(tempPaths.map((p) => fs.rm(p, { force: true }).catch(() => {})));
}
