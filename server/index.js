import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import fs from 'node:fs';
import { PUBLIC_DIR, TMP_DIR, CACHE_DIR } from './lib/paths.js';
import { startCleanup } from './lib/cleanup.js';
import uploadRoute from './routes/upload.js';
import simplifyRoute from './routes/simplify.js';
import resultRoute from './routes/result.js';
import downloadRoute from './routes/download.js';

// Çalışma dizinlerini hazırla (web root DIŞINDA).
for (const dir of [TMP_DIR, CACHE_DIR]) fs.mkdirSync(dir, { recursive: true });

const app = express();

// Güvenlik başlıkları. CSP, WASM/blob worker yüklemesini engellememesi için kapalı
// (üretimde sıkılaştırılabilir).
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'same-origin' },
  })
);
app.use(express.json({ limit: '1mb' }));

// API hız sınırı (DoS önleme).
app.use('/api', rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true, legacyHeaders: false }));

app.use('/api/upload', uploadRoute);
app.use('/api/simplify', simplifyRoute);
app.use('/api/result', resultRoute);
app.use('/api/download', downloadRoute);

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Üretimde Vite build çıktısını servis et (dev'de Vite kendi sunucusunda çalışır).
if (fs.existsSync(PUBLIC_DIR)) {
  app.use(express.static(PUBLIC_DIR));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile('index.html', { root: PUBLIC_DIR });
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[mesh-editor] API + statik servis: http://localhost:${PORT}`);
});

startCleanup();
