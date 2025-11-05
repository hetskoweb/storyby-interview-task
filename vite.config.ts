import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/storyby-interview-task/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        landing1: resolve(__dirname, 'src/landings/landing1/index.html'),
      },
    },
  },
  server: {
    open: '/src/landings/landing1/index.html',
  },
});