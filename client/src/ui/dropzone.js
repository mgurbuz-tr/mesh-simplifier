// Drag & drop + dosya seçici. Birden çok dosya (OBJ + PNG + MTL) veya tek .zip
// kabul eder. Geçerli bir set seçilince onFiles(File[]) çağrılır.

const MESH_EXTS = ['.glb', '.gltf', '.obj', '.stl', '.ply'];
const ALL_EXTS = [...MESH_EXTS, '.png', '.jpg', '.jpeg', '.mtl', '.zip'];

const extOf = (name) => {
  const i = name.lastIndexOf('.');
  return i < 0 ? '' : name.slice(i).toLowerCase();
};
const isMesh = (name) => MESH_EXTS.includes(extOf(name));
const isZip = (name) => extOf(name) === '.zip';
const isAccepted = (name) => ALL_EXTS.includes(extOf(name));

/**
 * @param {object} els  { dropzone, fileInput, pickBtn }
 * @param {(files:File[])=>void} onFiles
 */
export function setupDropzone({ dropzone, fileInput, pickBtn }, onFiles) {
  const handle = (fileList) => {
    const files = Array.from(fileList || []).filter((f) => isAccepted(f.name));
    if (files.length === 0) {
      alert(`Desteklenen formatlar: ${ALL_EXTS.join(', ')}`);
      return;
    }
    // En az bir mesh dosyası ya da bir .zip olmalı.
    if (!files.some((f) => isMesh(f.name) || isZip(f.name))) {
      alert('Bir mesh dosyası (.glb/.gltf/.obj/.stl/.ply) veya .zip seçmelisin.');
      return;
    }
    onFiles(files);
  };

  pickBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    handle(fileInput.files);
    fileInput.value = ''; // aynı dosyaları tekrar seçebilmek için
  });

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
  target.addEventListener('drop', (e) => handle(e.dataTransfer?.files));
}

export function showDropzone(dropzone, show) {
  dropzone.classList.toggle('hidden', !show);
}
