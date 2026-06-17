import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

let _ioPromise;

/**
 * Tekil NodeIO örneği — meshopt + draco sıkıştırmalı GLB'leri okuyabilir/yazabilir.
 */
export function getIO() {
  if (_ioPromise) return _ioPromise;
  _ioPromise = (async () => {
    await Promise.all([MeshoptDecoder.ready, MeshoptEncoder.ready, MeshoptSimplifier.ready]);
    const io = new NodeIO()
      .registerExtensions(ALL_EXTENSIONS)
      .registerDependencies({
        'meshopt.decoder': MeshoptDecoder,
        'meshopt.encoder': MeshoptEncoder,
        'draco3d.decoder': await draco3d.createDecoderModule(),
        'draco3d.encoder': await draco3d.createEncoderModule(),
      });
    return io;
  })();
  return _ioPromise;
}

/** meshoptimizer simplifier'ı (ready beklenmiş). */
export async function getSimplifier() {
  await MeshoptSimplifier.ready;
  return MeshoptSimplifier;
}
