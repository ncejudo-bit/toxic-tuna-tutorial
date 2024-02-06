import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), alpinejs(), tailwind()]
});