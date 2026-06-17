// Çalışan sunucuya (localhost:3001) karşı uçtan uca test:
// upload -> simplify(0.5) -> download GLB + OBJ/PNG zip. Her format için.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.resolve(__dirname, '..', 'test-assets');
const OUT = path.resolve(__dirname, '..', 'test-out');
fs.mkdirSync(OUT, { recursive: true });
const BASE = 'http://localhost:3001';

const files = ['sphere.glb', 'sphere.obj', 'sphere.ply', 'sphere.stl', 'textured.glb'];
let failures = 0;

for (const name of files) {
  process.stdout.write(`\n### ${name}\n`);
  try {
    // 1) upload
    const buf = fs.readFileSync(path.join(ASSETS, name));
    const form = new FormData();
    form.append('mesh', new Blob([buf]), name);
    const upRes = await fetch(`${BASE}/api/upload`, { method: 'POST', body: form });
    const up = await upRes.json();
    if (!upRes.ok) throw new Error('upload: ' + up.error);
    console.log(`  upload OK  jobId=${up.jobId.slice(0, 8)}  orig: ${up.original.triangles} tri / ${up.original.vertices} vert`);

    // 2) preview fetch
    const prev = await fetch(`${BASE}/api/result/${up.jobId}?kind=preview`);
    const prevBuf = Buffer.from(await prev.arrayBuffer());
    assert(prev.ok && prevBuf.subarray(0, 4).toString('ascii') === 'glTF', 'preview GLB geçerli');

    // 3) simplify %50
    const simRes = await fetch(`${BASE}/api/simplify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId: up.jobId, ratio: 0.5 }),
    });
    const sim = await simRes.json();
    if (!simRes.ok) throw new Error('simplify: ' + sim.error);
    console.log(`  simplify OK  achieved: ${sim.achieved.triangles} tri  reduction: ${(sim.reduction * 100).toFixed(1)}%  clamped: ${sim.clamped}`);
    assert(sim.achieved.triangles < up.original.triangles || up.original.triangles < 10, 'üçgen sayısı azaldı');

    // 4) view fetch
    const view = await fetch(`${BASE}/api/result/${up.jobId}?kind=view`);
    const viewBuf = Buffer.from(await view.arrayBuffer());
    assert(view.ok && viewBuf.subarray(0, 4).toString('ascii') === 'glTF', 'view GLB geçerli');

    // 5) download GLB
    const glb = await fetch(`${BASE}/api/download/${up.jobId}?format=glb&ratio=0.5`);
    const glbBuf = Buffer.from(await glb.arrayBuffer());
    assert(glb.ok && glbBuf.subarray(0, 4).toString('ascii') === 'glTF', 'download GLB geçerli');
    fs.writeFileSync(path.join(OUT, name + '.glb'), glbBuf);

    // 6) download OBJ+PNG zip
    const obj = await fetch(`${BASE}/api/download/${up.jobId}?format=obj&ratio=0.5`);
    const objBuf = Buffer.from(await obj.arrayBuffer());
    assert(obj.ok && objBuf.subarray(0, 2).toString('ascii') === 'PK', 'download OBJ zip geçerli (PK magic)');
    fs.writeFileSync(path.join(OUT, name + '.zip'), objBuf);
    console.log(`  download OK  glb=${glbBuf.length}B  objzip=${objBuf.length}B`);
  } catch (e) {
    failures++;
    console.error('  ✗ HATA:', e.message);
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error('assert: ' + msg);
  console.log('  ✓ ' + msg);
}

console.log(`\n${failures === 0 ? '✅ TÜM TESTLER GEÇTİ' : `❌ ${failures} test başarısız`}`);
process.exit(failures === 0 ? 0 : 1);
