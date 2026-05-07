// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://elenatrenchburg.netlify.app',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
