import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';
import { TMP_DIR } from '../lib/paths.js';

const ALLOWED = new Set(['.glb', '.gltf', '.obj', '.stl', '.ply']);
const MAX_BYTES = 256 * 1024 * 1024; // ~256MB (100-200MB dosyalar için pay)

// diskStorage: 200MB'ı RAM'e koymak yerine diske akıt. UUID isim — originalname'e güvenme.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, TMP_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${crypto.randomUUID()}${ext}`);
  },
});

export const uploadMiddleware = multer({
  storage,
  limits: { fileSize: MAX_BYTES, files: 1, fields: 5 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ALLOWED.has(ext)) cb(null, true);
    else cb(new Error(`Desteklenmeyen dosya türü (${ext || 'uzantısız'})`));
  },
}).single('mesh');
