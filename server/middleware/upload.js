import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';
import { TMP_DIR } from '../lib/paths.js';

// Mesh + doku (PNG/JPG) + MTL + ZIP. OBJ'yi dokusuyla birlikte yükleyebilmek için
// çoklu dosya (.array) kabul ediyoruz; tek bir .zip de açılabilir.
const ALLOWED = new Set([
  '.glb', '.gltf', '.obj', '.stl', '.ply', // mesh
  '.png', '.jpg', '.jpeg', // doku
  '.mtl', // materyal (map_Kd eşlemesi)
  '.zip', // obj+mtl+png paketi
]);
const MAX_BYTES = 256 * 1024 * 1024; // dosya başına ~256MB

// diskStorage: büyük dosyaları RAM yerine diske akıt. UUID isim — originalname'e güvenme.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, TMP_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${crypto.randomUUID()}${ext}`);
  },
});

export const uploadMiddleware = multer({
  storage,
  limits: { fileSize: MAX_BYTES, files: 16, fields: 5 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ALLOWED.has(ext)) cb(null, true);
    else cb(new Error(`Desteklenmeyen dosya türü (${ext || 'uzantısız'})`));
  },
}).array('mesh', 16);
