import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    proxy: {
      "^/api/": {
        target: "http://127.0.0.1:4000",
        ws: true,
        changeOrigin: true
      },
      "^/auth/": {
        target: "http://127.0.0.1:4000",
        ws: true,
        changeOrigin: true
      },
    },
  },
  build: {
    target: 'esnext',
  },
});
