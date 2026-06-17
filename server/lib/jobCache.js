import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { CACHE_DIR } from './paths.js';

// jobId -> { id, name, original:{triangles,vertices}, createdAt }
// "Parse-bir-kez": welded kaynak GLB diskte cache/<id>/source.glb olarak tutulur;
// her slider değişimi 200MB'ı yeniden ayrıştırmaz, sadece bu kaynaktan simplify eder.
const jobs = new Map();
const TTL_MS = 30 * 60 * 1000;

export function newJobId() {
  return crypto.randomUUID();
}

export function jobDir(id) {
  return path.join(CACHE_DIR, id);
}

export function setJob(meta) {
  jobs.set(meta.id, { ...meta, createdAt: Date.now() });
}

export function getJob(id) {
  return jobs.get(id);
}

export function touchJob(id) {
  const j = jobs.get(id);
  if (j) j.createdAt = Date.now();
}

/** TTL'i geçen işleri bellekten ve diskten temizler. */
export async function sweepJobs() {
  const now = Date.now();
  for (const [id, j] of jobs) {
    if (now - j.createdAt > TTL_MS) {
      jobs.delete(id);
      await fs.rm(jobDir(id), { recursive: true, force: true }).catch(() => {});
    }
  }
}
