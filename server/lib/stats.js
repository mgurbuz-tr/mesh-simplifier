/**
 * Bir gltf-transform Document'ındaki toplam üçgen ve vertex sayısını sayar.
 * @param {import('@gltf-transform/core').Document} document
 * @returns {{triangles:number, vertices:number}}
 */
export function countStats(document) {
  let triangles = 0;
  let vertices = 0;
  for (const mesh of document.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      const pos = prim.getAttribute('POSITION');
      if (pos) vertices += pos.getCount();
      const idx = prim.getIndices();
      if (idx) triangles += Math.floor(idx.getCount() / 3);
      else if (pos) triangles += Math.floor(pos.getCount() / 3);
    }
  }
  return { triangles, vertices };
}
