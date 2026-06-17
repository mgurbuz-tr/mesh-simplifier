// Parametre paneli DOM yardımcıları: slider, istatistik tablosu, indir butonları.

const fmt = new Intl.NumberFormat('tr-TR');

export function grabPanelEls() {
  const id = (x) => document.getElementById(x);
  return {
    ratio: id('ratio'),
    ratioValue: id('ratio-value'),
    origTris: id('orig-tris'),
    newTris: id('new-tris'),
    origVerts: id('orig-verts'),
    newVerts: id('new-verts'),
    reduction: id('reduction'),
    achievedNote: id('achieved-note'),
    dlGlb: id('dl-glb'),
    dlObj: id('dl-obj'),
    resetBtn: id('reset-btn'),
    badge: id('viewport-badge'),
    filename: id('filename'),
    loading: id('loading'),
    loadingText: id('loading-text'),
  };
}

export function setEnabled(els, enabled) {
  els.ratio.disabled = !enabled;
  els.dlGlb.disabled = !enabled;
  els.dlObj.disabled = !enabled;
  els.resetBtn.disabled = !enabled;
}

export function setLoading(els, on, text = 'İşleniyor…') {
  els.loadingText.textContent = text;
  els.loading.classList.toggle('hidden', !on);
}

export function setRatioLabel(els, pct) {
  els.ratioValue.textContent = `${pct}%`;
}

/** Orijinal istatistikleri yazar; sonuç sütununu sıfırlar. */
export function setOriginalStats(els, original) {
  els.origTris.textContent = fmt.format(original.triangles);
  els.origVerts.textContent = fmt.format(original.vertices);
  els.newTris.textContent = fmt.format(original.triangles);
  els.newVerts.textContent = fmt.format(original.vertices);
  els.reduction.textContent = '0%';
  els.achievedNote.hidden = true;
  updateBadge(els, original.triangles, original.vertices);
}

/** Basitleştirme sonucu istatistiklerini yazar. */
export function setResultStats(els, achieved, reduction, requestedPct, clamped) {
  els.newTris.textContent = fmt.format(achieved.triangles);
  els.newVerts.textContent = fmt.format(achieved.vertices);
  els.reduction.textContent = `${(reduction * 100).toFixed(1)}%`;
  updateBadge(els, achieved.triangles, achieved.vertices);

  // meshopt istenen orana her zaman tam ulaşamaz → gerçekleşeni belirt.
  const note = [];
  if (clamped) note.push('Viewport önizlemesi gerçek sonuçtan daha düşük çözünürlükte gösteriliyor (indirme tam çözünürlüktür).');
  els.achievedNote.textContent = note.join(' ');
  els.achievedNote.hidden = note.length === 0;
}

function updateBadge(els, triangles, vertices) {
  els.badge.hidden = false;
  els.badge.innerHTML = `<strong>${fmt.format(triangles)}</strong> üçgen · <strong>${fmt.format(vertices)}</strong> vertex`;
}
