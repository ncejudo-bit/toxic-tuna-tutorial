import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://quiet-bienenstitch-4aa847.netlify.app",
  integrations: [svelte(), alpinejs(), tailwind(), preact()]
});