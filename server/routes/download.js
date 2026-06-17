import express from 'express';
import path from 'node:path';
import { getIO } from '../lib/io.js';
import { simplifyDocument } from '../lib/simplifyMesh.js';
import { toGLB, toOBJZip } from '../lib/exportMesh.js';
import { getJob, jobDir, touchJob } from '../lib/jobCache.js';
import { withLimit } from '../lib/queue.js';

const router = express.Router();

// GET /api/download/:jobId?format=glb|obj&ratio=R
// Kaynaktan istenen oranda yeniden simplify edip tam çözünürlüklü çıktı döndürür.
router.get('/:jobId', async (req, res) => {
  const { jobId } = req.params;
  const job = getJob(jobId);
  if (!job) return res.status(404).json({ error: 'İş bulunamadı (süresi dolmuş olabilir)' });

  const format = req.query.format === 'obj' ? 'obj' : 'glb';
  const r = clamp(Number(req.query.ratio), 0.001, 1);
  const base = sanitize(job.name).replace(/\.[^.]+$/, '') + '_simplified';

  try {
    await withLimit(async () => {
      const io = await getIO();
      const doc = await io.read(path.join(jobDir(jobId), 'source.glb'));
      await simplifyDocument(doc, r);
      touchJob(jobId);

      if (format === 'glb') {
        const bytes = await toGLB(doc, { compress: true });
        res.setHeader('Content-Type', 'model/gltf-binary');
        res.setHeader('Content-Disposition', `attachment; filename="${base}.glb"`);
        res.send(Buffer.from(bytes));
      } else {
        const zip = await toOBJZip(doc, base);
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="${base}.zip"`);
        res.send(zip);
      }
    });
  } catch (e) {
    console.error('[download]', e);
    res.status(500).json({ error: 'İndirme hatası: ' + e.message });
  }
});

function clamp(v, lo, hi) {
  if (!isFinite(v)) return hi;
  return Math.min(hi, Math.max(lo, v));
}
function sanitize(name) {
  return String(name).replace(/[^a-zA-Z0-9._-]/g, '_');
}

export default router;
