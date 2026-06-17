// WebGL kaynakları çöp toplayıcı tarafından serbest bırakılmaz; her yeniden
// yüklemede geometry + material + texture'ları elle dispose etmek gerekir.
// Bu, three.js'te en sık görülen bellek sızıntısıdır.

function disposeMaterial(material) {
  if (!material) return;
  // Materyaldeki tüm texture-benzeri property'leri tara ve dispose et.
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && value.isTexture) {
      // GLTF ImageBitmap kaynakları ayrıca kapatılmalı.
      value.source?.data?.close?.();
      value.dispose();
    }
  }
  material.dispose();
}

/**
 * Bir Object3D ağacındaki tüm GPU kaynaklarını serbest bırakır.
 * @param {import('three').Object3D} root
 */
export function disposeObject(root) {
  if (!root) return;
  root.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(disposeMaterial);
      else disposeMaterial(obj.material);
    }
  });
}
