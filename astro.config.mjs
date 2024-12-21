import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  integrations: [tailwind(), partytown()],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
});