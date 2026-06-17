import fs from 'node:fs/promises';
import path from 'node:path';
import { TMP_DIR } from './paths.js';
import { sweepJobs } from './jobCache.js';

const SWEEP_INTERVAL = 5 * 60 * 1000;
const TMP_TTL = 30 * 60 * 1000;

/** Periyodik temizlik: süresi dolan iş önbelleği + sahipsiz geçici upload'lar. */
export function startCleanup() {
  const timer = setInterval(async () => {
    await sweepJobs();
    await sweepTmp();
  }, SWEEP_INTERVAL);
  timer.unref();
}

async function sweepTmp() {
  let entries;
  try {
    entries = await fs.readdir(TMP_DIR);
  } catch {
    return;
  }
  const now = Date.now();
  for (const name of entries) {
    const p = path.join(TMP_DIR, name);
    try {
      const st = await fs.stat(p);
      if (now - st.mtimeMs > TMP_TTL) await fs.rm(p, { force: true });
    } catch {
      /* ignore */
    }
  }
}
