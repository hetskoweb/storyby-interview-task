import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/storyby-interview-task/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        landing1: resolve(__dirname, 'src/landing1/index.html'),
      },
    },
    outDir: 'dist',
  },
  server: {
    open: '/src/landing1/index.html',
  },
});