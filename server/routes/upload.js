import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { uploadMiddleware } from '../middleware/upload.js';
import { validateMagic } from '../lib/validate.js';
import { parseToDocument } from '../lib/parse.js';
import { simplifyDocument } from '../lib/simplifyMesh.js';
import { clampForDisplay } from '../lib/previewLOD.js';
import { countStats } from '../lib/stats.js';
import { toGLB } from '../lib/exportMesh.js';
import { newJobId, jobDir, setJob } from '../lib/jobCache.js';
import { withLimit } from '../lib/queue.js';

const router = express.Router();

// POST /api/upload  (multipart, field "mesh")
router.post('/', (req, res) => {
  uploadMiddleware(req, res, async (err) => {
    if (err) {
      const code = err.code === 'LIMIT_FILE_SIZE' ? 413 : 400;
      return res.status(code).json({ error: err.message });
    }
    if (!req.file) return res.status(400).json({ error: 'Dosya bulunamadı' });

    const tmpPath = req.file.path;
    const ext = path.extname(req.file.filename).toLowerCase();

    try {
      if (!(await validateMagic(tmpPath, ext))) {
        return res.status(400).json({ error: 'Dosya içeriği uzantısıyla uyuşmuyor' });
      }

      await withLimit(async () => {
        // 1) Parse + weld (bir kez). Original istatistik welded haliyle ölçülür.
        const doc = await parseToDocument(tmpPath, ext);
        await simplifyDocument(doc, 1.0); // sadece weld/index
        const original = countStats(doc);
        if (original.triangles === 0) {
          throw new Error('Mesh içinde üçgen bulunamadı (nokta bulutu / boş olabilir)');
        }

        const id = newJobId();
        const dir = jobDir(id);
        await fs.mkdir(dir, { recursive: true });

        // 2) Welded kaynağı diske yaz (sonraki simplify/download bunu kullanır).
        const srcBytes = await toGLB(doc);
        await fs.writeFile(path.join(dir, 'source.glb'), Buffer.from(srcBytes));

        // 3) Viewport için preview-LOD (aynı doc mutate edilir; kaynağı zaten yazdık).
        await clampForDisplay(doc);
        const previewBytes = await toGLB(doc);
        await fs.writeFile(path.join(dir, 'preview.glb'), Buffer.from(previewBytes));

        setJob({ id, name: req.file.originalname, original });
        res.json({ jobId: id, original, name: req.file.originalname });
      });
    } catch (e) {
      console.error('[upload]', e);
      res.status(500).json({ error: 'Mesh işlenemedi: ' + e.message });
    } finally {
      await fs.rm(tmpPath, { force: true }).catch(() => {});
    }
  });
});

export default router;
