# Windows'ta Çalıştırma (internet olmadan, kopyalanan node_modules ile)

> **Neden `npm run dev` çalışmıyor?**
> `node_modules`'ü başka bir işletim sisteminden (macOS) kopyaladığında iki şey bozulur:
> 1. **`.bin` komut kısayolları** — Windows `.cmd` shim'leri ister; bunları `npm install` *yerelde* üretir. macOS zip'inde Unix symlink'leri var → `concurrently is not recognized` hatası.
> 2. **Platforma özel native binary'ler** — `vite`'ın kullandığı `esbuild`/`rollup` her OS için ayrıdır; macOS zip'inde Windows binary'leri yok.
>
> **Çözüm:** `npm run dev` (geliştirme) yerine **`npm start`** (üretim) kullan. `npm start` sadece `node server/index.js`'tir; `concurrently`/`vite` gerektirmez. Sunucunun tüm bağımlılıkları saf JS + WASM olduğundan kopyalanan `node_modules` ile Windows'ta çalışır. (Tek native bağımlılık olan `sharp`'ın Windows binary'si bu repoya eklendi.)

## Adımlar

1. **Node.js kurulu olsun** (18+):
   ```cmd
   node --version
   ```

2. **Proje dosyalarını al** (kaynak + derlenmiş `server/public/` dahil):
   - `git pull` **veya** GitHub'dan "Code → Download ZIP" ile indir/çıkar.
   - `server/public/` klasörü repoda hazır gelir — Windows'ta derlemeye gerek yok.

3. **`node_modules.zip`'i indir ve çıkar** (repodaki güncel sürüm — Windows `sharp` binary'si dahil):
   - GitHub'da `node_modules.zip`'e tıkla → indir.
   - Proje köküne çıkar; sonuçta `mesh-editor/node_modules/` oluşsun.
   - (Eski bir `node_modules` varsa önce sil.)

4. **Başlat:**
   ```cmd
   npm start
   ```
   Bu, `node --max-old-space-size=4096 server/index.js` çalıştırır.

5. **Tarayıcıda aç:** http://localhost:3001

## İleride internet erişimin olursa (önerilen kalıcı çözüm)

Kopyalama yöntemi yerine standart kurulum her şeyi (dev dahil) düzeltir:
```cmd
npm install
npm run dev      # geliştirme (hot reload)  → http://localhost:5173
npm run serve    # üretim (build + start)    → http://localhost:3001
```

## Notlar
- `npm run dev` Windows'ta yalnızca gerçek `npm install` sonrası çalışır.
- Windows PC'in 64-bit (x64) varsayıldı. ARM tabanlıysa (`@img/sharp-win32-arm64` gerekir) haber ver.
