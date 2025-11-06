import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');

const viteConfigModule = await import('./vite.config.mjs');
const getConfig = viteConfigModule.default;

const landingNames = ['landing1', 'landing2', 'landing3'];

async function buildAllLandings() {
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  for (const name of landingNames) {
    const config = getConfig(name);
    await build(config);
  }
}

buildAllLandings();
