import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { getJob, jobDir, touchJob } from '../lib/jobCache.js';

const router = express.Router();

// GET /api/result/:jobId?kind=preview|view  → viewport için GLB akışı
router.get('/:jobId', (req, res) => {
  const { jobId } = req.params;
  if (!getJob(jobId)) {
    return res.status(404).json({ error: 'İş bulunamadı (süresi dolmuş olabilir)' });
  }
  const kind = req.query.kind === 'view' ? 'view' : 'preview';
  const file = path.join(jobDir(jobId), `${kind}.glb`);
  if (!fs.existsSync(file)) {
    return res.status(404).json({ error: 'Önizleme henüz hazır değil' });
  }
  touchJob(jobId);
  res.setHeader('Content-Type', 'model/gltf-binary');
  res.setHeader('Cache-Control', 'no-store');
  fs.createReadStream(file).pipe(res);
});

export default router;
