// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://backatmarius.github.io',
  base: '/funeral_astro/',
  vite: {
    plugins: [tailwindcss()]
  }
});
