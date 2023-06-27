import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://mellifluous-kringle-4809b2.netlify.app/',
  integrations: [sitemap(), robotsTxt()]
});