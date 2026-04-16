// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://downunder-steuerberatung.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'de',
      locales: {
        de: 'de-DE',
        en: 'en-AU',
      },
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
