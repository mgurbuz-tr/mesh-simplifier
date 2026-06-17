import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'meshoptimizer';

// Sunucu, viewport/indirme GLB'lerini EXT_meshopt_compression ile sıkıştırıyor
// (sıkıştırılmış girdiyi açıp sıkıştırmasız yazmak dosyayı şişirirdi). Bu yüzden
// GLTFLoader'a meshopt decoder bağlıyoruz.
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);

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
