import fs from 'node:fs/promises';

// Uzantı + magic-byte tutarlılık kontrolü. multer'in sahte mimetype'a
// güvenmesi güvenli değildir; dosya başlığını okuyup içeriği doğrularız.
export async function validateMagic(filePath, ext) {
  const fh = await fs.open(filePath, 'r');
  try {
    const buf = Buffer.alloc(16);
    const { bytesRead } = await fh.read(buf, 0, 16, 0);
    const head = buf.subarray(0, bytesRead);

    switch (ext) {
      case '.glb':
        // glTF binary magic
        return head.subarray(0, 4).toString('ascii') === 'glTF';
      case '.gltf': {
        const s = head.toString('utf8').replace(/^﻿/, '').trimStart();
        return s.startsWith('{');
      }
      case '.ply':
        return head.subarray(0, 3).toString('ascii') === 'ply';
      case '.stl':
        // Binary STL'in güvenilir bir magic'i yok (80 byte serbest başlık);
        // ASCII STL "solid" ile başlar. İkisini de kabul edip parse'a bırakıyoruz.
        return true;
      case '.obj':
        // Düz metin; parser doğrular.
        return true;
      default:
        return false;
    }
  } finally {
    await fh.close();
  }
}
