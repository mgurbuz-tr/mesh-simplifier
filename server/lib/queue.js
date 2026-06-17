import pLimit from 'p-limit';

// 100-200MB mesh işleme bellek-yoğundur. Ağır işleri seri çalıştırarak
// paralel isteklerin OOM/DoS yaratmasını önleriz.
const limit = pLimit(1);

export function withLimit(fn) {
  return limit(fn);
}
