import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { uploadMiddleware } from '../middleware/upload.js';
import { validateMagic } from '../lib/validate.js';
import { resolveInput, cleanupTemp } from '../lib/inputFiles.js';
import { parseToDocument } from '../lib/parse.js';
import { simplifyDocument } from '../lib/simplifyMesh.js';
import { clampForDisplay } from '../lib/previewLOD.js';
import { countStats } from '../lib/stats.js';
import { toGLB } from '../lib/exportMesh.js';
import { newJobId, jobDir, setJob } from '../lib/jobCache.js';
import { withLimit } from '../lib/queue.js';

const router = express.Router();

// POST /api/upload  (multipart, field "mesh" — bir veya birden çok dosya, ya da tek .zip)
router.post('/', (req, res) => {
  uploadMiddleware(req, res, async (err) => {
    if (err) {
      const code = err.code === 'LIMIT_FILE_SIZE' ? 413 : 400;
      return res.status(code).json({ error: err.message });
    }
    const files = req.files || [];
    if (files.length === 0) return res.status(400).json({ error: 'Dosya bulunamadı' });

    let tempPaths = files.map((f) => f.path);
    try {
      // Çoklu dosya / zip çözümle: birincil mesh + (OBJ için) doku.
      const resolved = await resolveInput(files);
      tempPaths = resolved.tempPaths;
      const { primary, texture } = resolved;

      if (!(await validateMagic(primary.path, primary.ext))) {
        return res.status(400).json({ error: 'Dosya içeriği uzantısıyla uyuşmuyor' });
      }

      await withLimit(async () => {
        // 1) Parse (+doku) + weld. Original istatistik welded haliyle ölçülür.
        const doc = await parseToDocument(primary.path, primary.ext, { texture });
        await simplifyDocument(doc, 1.0); // sadece weld/index
        const original = countStats(doc);
        if (original.triangles === 0) {
          throw new Error('Mesh içinde üçgen bulunamadı (nokta bulutu / boş olabilir)');
        }

        const id = newJobId();
        const dir = jobDir(id);
        await fs.mkdir(dir, { recursive: true });

        // 2) Welded kaynağı diske yaz (sıkıştırmasız — tam hassasiyet; sonraki
        //    simplify/download bunu kullanır).
        const srcBytes = await toGLB(doc);
        await fs.writeFile(path.join(dir, 'source.glb'), Buffer.from(srcBytes));

        // 3) Viewport için preview-LOD (meshopt sıkıştırmalı — küçük transfer).
        await clampForDisplay(doc);
        const previewBytes = await toGLB(doc, { compress: true });
        await fs.writeFile(path.join(dir, 'preview.glb'), Buffer.from(previewBytes));

        setJob({ id, name: primary.name, original, textured: !!texture });
        res.json({ jobId: id, original, name: primary.name, textured: !!texture });
      });
    } catch (e) {
      console.error('[upload]', e);
      res.status(500).json({ error: 'Mesh işlenemedi: ' + e.message });
    } finally {
      await cleanupTemp(tempPaths);
    }
  });
});

export default router;
