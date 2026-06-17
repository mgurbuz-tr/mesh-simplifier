// Drag & drop + dosya seçici. Geçerli bir dosya seçilince onFile(file) çağrılır.

const ACCEPTED = ['.glb', '.gltf', '.obj', '.stl', '.ply'];

function hasAcceptedExt(name) {
  const lower = name.toLowerCase();
  return ACCEPTED.some((ext) => lower.endsWith(ext));
}

/**
 * @param {object} els  { dropzone, fileInput, pickBtn }
 * @param {(file:File)=>void} onFile
 */
export function setupDropzone({ dropzone, fileInput, pickBtn }, onFile) {
  const handle = (file) => {
    if (!file) return;
    if (!hasAcceptedExt(file.name)) {
      alert(`Desteklenmeyen format. Kabul edilenler: ${ACCEPTED.join(', ')}`);
      return;
    }
    onFile(file);
  };

  pickBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    handle(fileInput.files[0]);
    fileInput.value = ''; // aynı dosyayı tekrar seçebilmek için
  });

  // Sürükleme tüm viewport üzerinde çalışsın.
  const target = dropzone.parentElement;
  ['dragenter', 'dragover'].forEach((ev) =>
    target.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    })
  );
  ['dragleave', 'drop'].forEach((ev) =>
    target.addEventListener(ev, (e) => {
      e.preventDefault();
      if (ev === 'dragleave' && target.contains(e.relatedTarget)) return;
      dropzone.classList.remove('dragover');
    })
  );
  target.addEventListener('drop', (e) => {
    const file = e.dataTransfer?.files?.[0];
    handle(file);
  });
}

export function showDropzone(dropzone, show) {
  dropzone.classList.toggle('hidden', !show);
}
