import { defineConfig } from 'vite';

// Frontend dev server proxies /api to the Express backend.
// Production build is emitted into server/public, which Express serves statically.
export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'server/public',
    emptyOutDir: true,
    target: 'esnext',
  },
});
