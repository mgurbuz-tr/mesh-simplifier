import fs from 'node:fs/promises';
import { Document } from '@gltf-transform/core';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { getIO } from './io.js';

/**
 * Herhangi bir desteklenen formatı tek bir gltf-transform Document'a çevirir.
 * GLB/GLTF native okunur; OBJ/STL/PLY three loader.parse ile (DOM gerekmez) parse edilip
 * Document'a dönüştürülür. Böylece tek bir simplify hattı kullanılır.
 *
 * @param {string} filePath
 * @param {string} ext  '.glb' | '.gltf' | '.obj' | '.stl' | '.ply'
 */
export async function parseToDocument(filePath, ext) {
  ext = ext.toLowerCase();
  if (ext === '.glb' || ext === '.gltf') {
    const io = await getIO();
    return io.read(filePath);
  }
  const geometries = await loadThreeGeometries(filePath, ext);
  if (geometries.length === 0) {
    throw new Error('Dosyada geometri bulunamadı');
  }
  return geometriesToDocument(geometries);
}

function toArrayBuffer(buf) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

async function loadThreeGeometries(filePath, ext) {
  const buf = await fs.readFile(filePath);
  if (ext === '.stl') {
    return [new STLLoader().parse(toArrayBuffer(buf))];
  }
  if (ext === '.ply') {
    return [new PLYLoader().parse(toArrayBuffer(buf))];
  }
  if (ext === '.obj') {
    const group = new OBJLoader().parse(buf.toString('utf8'));
    const geoms = [];
    group.traverse((o) => {
      if (o.isMesh && o.geometry) geoms.push(o.geometry);
    });
    return geoms;
  }
  throw new Error(`Desteklenmeyen format: ${ext}`);
}

/** three.js BufferGeometry listesini gltf-transform Document'a çevirir. */
function geometriesToDocument(geometries) {
  const doc = new Document();
  const buffer = doc.createBuffer();
  const scene = doc.createScene();

  for (const geom of geometries) {
    const pos = geom.getAttribute?.('position') || geom.attributes?.position;
    if (!pos) continue;

    const prim = doc.createPrimitive();
    prim.setAttribute(
      'POSITION',
      doc.createAccessor().setType('VEC3').setArray(new Float32Array(pos.array)).setBuffer(buffer)
    );

    const normal = geom.getAttribute?.('normal') || geom.attributes?.normal;
    if (normal) {
      prim.setAttribute(
        'NORMAL',
        doc.createAccessor().setType('VEC3').setArray(new Float32Array(normal.array)).setBuffer(buffer)
      );
    }

    const uv = geom.getAttribute?.('uv') || geom.attributes?.uv;
    if (uv) {
      prim.setAttribute(
        'TEXCOORD_0',
        doc.createAccessor().setType('VEC2').setArray(new Float32Array(uv.array)).setBuffer(buffer)
      );
    }

    if (geom.index) {
      prim.setIndices(
        doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(geom.index.array)).setBuffer(buffer)
      );
    }

    const mat = doc
      .createMaterial('default')
      .setBaseColorFactor([0.82, 0.82, 0.85, 1])
      .setRoughnessFactor(0.85)
      .setMetallicFactor(0.0);
    prim.setMaterial(mat);

    const mesh = doc.createMesh().addPrimitive(prim);
    scene.addChild(doc.createNode().setMesh(mesh));
  }

  doc.getRoot().setDefaultScene(scene);
  return doc;
}
