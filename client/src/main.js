import '../src/style.css';
import { Viewer } from './viewer/Viewer.js';
import { loadGLB } from './io/loadGLB.js';
import {
  uploadFile,
  requestSimplify,
  fetchViewGLB,
  downloadUrl,
} from './api/client.js';
import { setupDropzone, showDropzone } from './ui/dropzone.js';
import {
  grabPanelEls,
  setEnabled,
  setLoading,
  setRatioLabel,
  setOriginalStats,
  setResultStats,
} from './ui/panel.js';

const canvas = document.getElementById('canvas');
const dropzone = document.getElementById('dropzone');
const viewer = new Viewer(canvas);
const els = grabPanelEls();

// Uygulama durumu
const state = {
  jobId: null,
  original: null, // { triangles, vertices }
  ratioPct: 100, // korunacak üçgen yüzdesi
};

// ---------- Dosya yükleme ----------
setupDropzone(
  {
    dropzone,
    fileInput: document.getElementById('file-input'),
    pickBtn: document.getElementById('pick-btn'),
  },
  handleFiles
);

async function handleFiles(files) {
  resetState();
  showDropzone(dropzone, false);
  const meshFile = files.find((f) => /\.(glb|gltf|obj|stl|ply|zip)$/i.test(f.name));
  els.filename.textContent = meshFile ? meshFile.name : `${files.length} dosya`;
  setLoading(els, true, 'Yükleniyor… 0%');

  try {
    const res = await uploadFile(files, (pct) => {
      setLoading(els, true, `Yükleniyor… ${Math.round(pct * 100)}%`);
    });
    setLoading(els, true, 'Mesh ayrıştırılıyor…');

    state.jobId = res.jobId;
    state.original = res.original;
    els.filename.textContent = res.textured ? `${res.name}  ·  dokulu` : res.name;

    // İlk görüntü: sunucunun ürettiği hafif preview-LOD.
    const buf = await fetchViewGLB(state.jobId, 'preview');
    const scene = await loadGLB(buf);
    viewer.setModel(scene);

    setOriginalStats(els, res.original);
    els.ratio.value = 100;
    state.ratioPct = 100;
    setRatioLabel(els, 100);
    setEnabled(els, true);
  } catch (err) {
    console.error(err);
    alert(`Hata: ${err.message}`);
    resetState();
    showDropzone(dropzone, true);
  } finally {
    setLoading(els, false);
  }
}

// ---------- Slider (drag-end'e debounce) ----------
els.ratio.addEventListener('input', () => {
  state.ratioPct = Number(els.ratio.value);
  setRatioLabel(els, state.ratioPct);
});
els.ratio.addEventListener('change', () => runSimplify());

async function runSimplify() {
  if (!state.jobId) return;
  const ratio = state.ratioPct / 100;
  setLoading(els, true, 'Basitleştiriliyor (QEM)…');
  setEnabled(els, false);

  try {
    const result = await requestSimplify(state.jobId, ratio);
    const buf = await fetchViewGLB(state.jobId, 'view');
    const scene = await loadGLB(buf);
    viewer.setModel(scene);
    setResultStats(els, result.achieved, result.reduction, state.ratioPct, result.clamped);
  } catch (err) {
    console.error(err);
    alert(`Hata: ${err.message}`);
  } finally {
    setEnabled(els, true);
    setLoading(els, false);
  }
}

// ---------- İndirme ----------
els.dlGlb.addEventListener('click', () => {
  if (state.jobId) window.location = downloadUrl(state.jobId, 'glb', state.ratioPct / 100);
});
els.dlObj.addEventListener('click', () => {
  if (state.jobId) window.location = downloadUrl(state.jobId, 'obj', state.ratioPct / 100);
});

// ---------- Sıfırlama ----------
els.resetBtn.addEventListener('click', () => {
  viewer.clear();
  resetState();
  showDropzone(dropzone, true);
  els.filename.textContent = 'Dosya yüklenmedi';
  els.badge.hidden = true;
});

function resetState() {
  state.jobId = null;
  state.original = null;
  state.ratioPct = 100;
  setEnabled(els, false);
}

setEnabled(els, false);
