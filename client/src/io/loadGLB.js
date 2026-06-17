import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

/**
 * Sunucudan gelen bir GLB ArrayBuffer'ını three.js sahnesine (Object3D) çevirir.
 * @param {ArrayBuffer} arrayBuffer
 * @returns {Promise<import('three').Group>}
 */
export function loadGLB(arrayBuffer) {
  return new Promise((resolve, reject) => {
    loader.parse(
      arrayBuffer,
      '',
      (gltf) => resolve(gltf.scene),
      (err) => reject(err)
    );
  });
}
