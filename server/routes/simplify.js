import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getIO } from '../lib/io.js';
import { simplifyDocument } from '../lib/simplifyMesh.js';
import { clampForDisplay } from '../lib/previewLOD.js';
import { toGLB } from '../lib/exportMesh.js';
import { getJob, jobDir, touchJob } from '../lib/jobCache.js';
import { withLimit } from '../lib/queue.js';

const router = express.Router();

// POST /api/simplify  { jobId, ratio }
router.post('/', async (req, res) => {
  const { jobId, ratio } = req.body || {};
  const job = getJob(jobId);
  if (!job) return res.status(404).json({ error: 'İş bulunamadı (süresi dolmuş olabilir)' });

  const r = clamp(Number(ratio), 0.001, 1);

  try {
    await withLimit(async () => {
      const io = await getIO();
      const doc = await io.read(path.join(jobDir(jobId), 'source.glb'));

      // Tam çözünürlüklü simplify → indirilecek/raporlanacak gerçek sonuç.
      const achieved = await simplifyDocument(doc, r);

      // Viewport sürümü: gerekirse görüntüleme bütçesine clamp (stats'ı etkilemez).
      const clamped = await clampForDisplay(doc);
      const viewBytes = await toGLB(doc, { compress: true });
      await fs.writeFile(path.join(jobDir(jobId), 'view.glb'), Buffer.from(viewBytes));
      touchJob(jobId);

      const reduction =
        job.original.triangles > 0 ? 1 - achieved.triangles / job.original.triangles : 0;

      res.json({ achieved, reduction, clamped });
    });
  } catch (e) {
    console.error('[simplify]', e);
    res.status(500).json({ error: 'Basitleştirme hatası: ' + e.message });
  }
});

function clamp(v, lo, hi) {
  if (!isFinite(v)) return hi;
  return Math.min(hi, Math.max(lo, v));
}

export default router;
