// Sunucu API'si ile konuşan ince istemci.
// Akış: upload -> (parse + preview) -> simplify(ratio) -> download(glb|obj)

const API = '/api';

/**
 * Dosya(ları) sunucuya yükler (OBJ + PNG + MTL veya tek .zip). Sunucu parse eder,
 * weld'ler, önbelleğe alır ve orijinal istatistikleri döndürür.
 * @param {File[]} files
 * @param {(pct:number)=>void} [onProgress]
 * @returns {Promise<{jobId:string, original:{triangles:number,vertices:number}, name:string, textured:boolean}>}
 */
export function uploadFile(files, onProgress) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    for (const f of files) form.append('mesh', f);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API}/upload`);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
    };
    xhr.onload = () => {
      let body;
      try {
        body = JSON.parse(xhr.responseText);
      } catch {
        return reject(new Error(`Sunucu hatası (${xhr.status})`));
      }
      if (xhr.status >= 200 && xhr.status < 300) resolve(body);
      else reject(new Error(body.error || `Yükleme başarısız (${xhr.status})`));
    };
    xhr.onerror = () => reject(new Error('Ağ hatası'));
    xhr.send(form);
  });
}

/**
 * Belirli bir oranda basitleştirme ister. Sunucu işler ve sonucu önbelleğe alır.
 * @param {string} jobId
 * @param {number} ratio  Korunacak üçgen oranı (0–1)
 * @returns {Promise<{achieved:{triangles:number,vertices:number}, reduction:number, clamped:boolean}>}
 */
export async function requestSimplify(jobId, ratio) {
  const res = await fetch(`${API}/simplify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobId, ratio }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || 'Basitleştirme başarısız');
  return body;
}

/**
 * Viewport için GLB'yi (preview veya simplified) ArrayBuffer olarak getirir.
 * @param {string} jobId
 * @param {'preview'|'view'} kind
 */
export async function fetchViewGLB(jobId, kind) {
  const res = await fetch(`${API}/result/${jobId}?kind=${kind}`);
  if (!res.ok) throw new Error('Önizleme alınamadı');
  return res.arrayBuffer();
}

/** İndirme URL'si üretir (tarayıcı doğrudan navigasyonla indirir). */
export function downloadUrl(jobId, format, ratio) {
  return `${API}/download/${jobId}?format=${format}&ratio=${ratio}`;
}
