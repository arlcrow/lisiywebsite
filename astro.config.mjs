import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from "@deno/astro-adapter";

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
  integrations: [tailwind()],
  output: "server",
  adapter: deno(),
});