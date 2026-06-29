import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

function cdnLabReload() {
  return {
    name: 'appinfo-cdn-lab-reload',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url && request.url.startsWith('/cdn/')) {
          response.setHeader('Cache-Control', 'no-store, max-age=0');
        }
        next();
      });
    },
    handleHotUpdate(context) {
      const file = context.file.replace(/\\/g, '/');
      if (
        file.includes('/public/cdn/')
        || file.includes('/src/styles/')
        || file.endsWith('/cdn-test.html')
      ) {
        context.server.ws.send({ type: 'full-reload', path: '/cdn-test.html' });
        return [];
      }
      return undefined;
    },
  };
}

export default defineConfig({
  plugins: [react(), cdnLabReload()],
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index.html'),
        cdnTest: resolve(__dirname, 'cdn-test.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
