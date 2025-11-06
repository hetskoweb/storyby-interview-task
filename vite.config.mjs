import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createLandingConfig = (landingName) => {
  if (typeof landingName !== 'string' || !landingName) {
    throw new Error(`[createLandingConfig] очікував рядок, але отримав: ${landingName}`);
  }

  const landingRoot = path.resolve(__dirname, `src/landings/${landingName}`);

  return defineConfig({
    base: './',
    root: landingRoot,

    plugins: [react()],

    build: {
      outDir: path.resolve(__dirname, `dist/${landingName}`),
      rollupOptions: {
        output: {
          assetFileNames: `assets/[name]-[hash].[ext]`,
          chunkFileNames: `assets/[name]-[hash].js`,
          entryFileNames: `assets/[name]-[hash].js`,
        }
      },
      emptyOutDir: true,
    },
  });
}

export default (configArg) => {

  if (typeof configArg === 'string') {
    return createLandingConfig(configArg);
  }

  const { command } = configArg;

  if (command === 'serve') {
    const landingName = process.env.VITE_LANDING_NAME;

    return createLandingConfig(landingName);
  }
};