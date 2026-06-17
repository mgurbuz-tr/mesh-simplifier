import { simplifyDocument } from './simplifyMesh.js';
import { countStats } from './stats.js';

// Tarayıcı ham 100-200MB mesh'i akıcı render edemez. Viewport için her zaman
// bu üçgen bütçesine kadar decimate edilmiş bir GLB gösteririz.
export const DISPLAY_BUDGET = 1_000_000;

/**
 * Document'ı (yerinde) görüntüleme bütçesine indirir. Zaten bütçe altındaysa dokunmaz.
 * @returns {Promise<boolean>} clamp uygulandı mı
 */
export async function clampForDisplay(document, budget = DISPLAY_BUDGET) {
  const { triangles } = countStats(document);
  if (triangles <= budget) return false;
  const ratio = budget / triangles;
  await simplifyDocument(document, ratio);
  return true;
}
