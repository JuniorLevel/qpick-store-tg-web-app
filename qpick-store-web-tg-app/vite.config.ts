import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets/',
      components: '/src/components/',
      features: '/src/features/',
      hooks: '/src/hooks/',
      interfaces: '/src/interfaces/',
      pages: '/src/pages/',
      store: '/src/store/',
      utils: '/src/utils/',
    },
  },
});
