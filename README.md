# Mesh Studio — 3D Mesh Görüntüleyici & Parametrik Simplify

Yüklenen 3D mesh'i tarayıcıda gösteren ve **QEM (Quadric Error Metrics, Garland-Heckbert)**
edge-collapse algoritmasıyla parametrik olarak basitleştiren Node.js web uygulaması.
3daistudio.com'un akışından esinlenildi: **yükle → görüntüle → orana göre basitleştir → indir.**

## Neden sunucu tarafı?

Hedef dosyalar **100-200MB** (≈5-15M üçgen). Bu boyutta istemci tarafı (tarayıcı) işleme
sekmeyi çökertir. Bu yüzden:

- **Simplify Node sunucuda** çalışır (`meshoptimizer` + `gltf-transform`).
- Tarayıcı ham mesh'i değil, sunucunun ürettiği **hafif preview-LOD** (≤1M üçgen) GLB'sini gösterir.
- Kaynak **bir kez** parse + weld edilip `jobId` ile önbelleğe alınır; her slider değişimi
  200MB'ı yeniden ayrıştırmaz.

## Desteklenen formatlar

- **Girdi:** GLB, GLTF, OBJ, STL, PLY
- **Çıktı:** GLB (tekstür gömülü tek dosya) · OBJ + MTL + PNG (`.zip` paketi)

## Kurulum & Çalıştırma

```bash
npm install

# Geliştirme (Vite @5173 + Express @3001, /api proxy'li)
npm run dev
# tarayıcı: http://localhost:5173

# Üretim (build + tek port)
npm run serve
# tarayıcı: http://localhost:3001
```

> Büyük dosyalar için Node heap'i `--max-old-space-size=4096` ile başlatılır (script'lerde hazır).

## Mimari

```
client/  → Vite + vanilla JS + three.js (viewport, UI)
server/  → Express API
  routes/   upload · simplify · result · download
  lib/      parse · simplifyMesh · previewLOD · exportMesh · jobCache · cleanup · io
```

### Veri akışı
1. `POST /api/upload` — dosyayı diske akıt, parse + weld, kaynağı önbelleğe al, preview-LOD üret.
2. `POST /api/simplify {jobId, ratio}` — kaynaktan QEM ile basitleştir, achieved istatistik döndür.
3. `GET /api/result/:jobId?kind=preview|view` — viewport için GLB akışı.
4. `GET /api/download/:jobId?format=glb|obj&ratio=R` — tam çözünürlüklü çıktı.

## Algoritma notları (araştırma)

- **QEM (Garland-Heckbert, SIGGRAPH 1997):** her vertex'e 4×4 quadric; edge-collapse maliyeti
  `vᵀQv` ile min-heap'te sıralanır. Kalite/hız altın standardı.
- **meshoptimizer** (`meshopt_simplify`): QEM tabanlı, near-linear, sınır/öznitelik korur.
- **Weld zorunlu:** simplify öncesi vertex birleştirme (indeksleme) yapılmazsa delik/sıfır azalma.
- **meshopt hedefi tutturmayabilir:** topoloji kısıtı bağlayıcı olunca istenen orana tam ulaşmaz —
  UI **gerçekleşen (achieved)** üçgen sayısını gösterir.

## Kapsam dışı (MVP)
FBX, rig'li/animasyonlu meshler, koruma anahtarları UI'ı, auth, kalıcı depolama.
