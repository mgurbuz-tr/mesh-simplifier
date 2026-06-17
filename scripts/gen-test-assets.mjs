// Test mesh'leri üretir: STL, OBJ, PLY (three exporter'ları) + GLB (gltf-transform).
// Tekstürlü GLB, OBJ+PNG export yolunu test etmek için.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';
import { PLYExporter } from 'three/addons/exporters/PLYExporter.js';
import { Document, NodeIO } from '@gltf-transform/core';

// three PLYExporter Node'da olmayan requestAnimationFrame'i çağırıyor — shim.
globalThis.requestAnimationFrame = (cb) => cb();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'test-assets');
fs.mkdirSync(OUT, { recursive: true });

// ~25k üçgenlik küre (simplify için yeterli).
const geom = new THREE.SphereGeometry(1, 120, 90);
const mesh = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color: 0x88aaff }));

// --- STL (binary) ---
const stl = new STLExporter().parse(mesh, { binary: true }); // DataView
fs.writeFileSync(path.join(OUT, 'sphere.stl'), Buffer.from(stl.buffer));

// --- OBJ ---
fs.writeFileSync(path.join(OUT, 'sphere.obj'), new OBJExporter().parse(mesh));

// --- PLY (binary) ---
new PLYExporter().parse(mesh, (result) => {
  fs.writeFileSync(path.join(OUT, 'sphere.ply'), Buffer.from(result));
}, { binary: true });

// --- GLB (geometri) via gltf-transform ---
function geomToGLB(g, outPath, texturePng) {
  const doc = new Document();
  const buffer = doc.createBuffer();
  const scene = doc.createScene();
  const prim = doc.createPrimitive();
  prim.setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(g.attributes.position.array)).setBuffer(buffer));
  if (g.attributes.normal) prim.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(g.attributes.normal.array)).setBuffer(buffer));
  if (g.attributes.uv) prim.setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(g.attributes.uv.array)).setBuffer(buffer));
  if (g.index) prim.setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(g.index.array)).setBuffer(buffer));

  const mat = doc.createMaterial('mat').setBaseColorFactor([1, 1, 1, 1]).setRoughnessFactor(0.8).setMetallicFactor(0);
  if (texturePng) {
    const tex = doc.createTexture('albedo').setImage(texturePng).setMimeType('image/png');
    mat.setBaseColorTexture(tex);
  }
  prim.setMaterial(mat);
  scene.addChild(doc.createNode().setMesh(doc.createMesh().addPrimitive(prim)));
  doc.getRoot().setDefaultScene(scene);
  return new NodeIO().writeBinary(doc).then((bytes) => fs.writeFileSync(outPath, Buffer.from(bytes)));
}

// 1x1 kırmızı PNG (OBJ+PNG export testi için).
const redPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64'
);

await geomToGLB(geom, path.join(OUT, 'sphere.glb'), null);

// Tekstürlü plane (UV'li) → OBJ+PNG testini garanti eder.
const plane = new THREE.PlaneGeometry(2, 2, 1, 1);
await geomToGLB(plane, path.join(OUT, 'textured.glb'), redPng);

console.log('Test assetleri yazıldı:', fs.readdirSync(OUT).join(', '));
