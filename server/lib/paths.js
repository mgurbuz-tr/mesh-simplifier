import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SERVER_DIR = path.resolve(__dirname, '..');
export const TMP_DIR = path.join(SERVER_DIR, 'tmp'); // multer geçici upload (web root DIŞI)
export const CACHE_DIR = path.join(SERVER_DIR, 'cache'); // jobId başına ara çıktı
export const PUBLIC_DIR = path.join(SERVER_DIR, 'public'); // Vite build çıktısı
