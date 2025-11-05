import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/storyby-interview-task/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/landings/landing1/index.html'),
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: '/src/landings/landing1/index.html',
  },
});