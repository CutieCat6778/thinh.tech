import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots-txt";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: "https://www.thinh.tech",
  experimental: {
    integrations: true
  },
  integrations: [preact(), sitemap(
    {
      customPages: [
        "https://www.thinh.tech/link",
        "https://www.thinh.tech/project",
        "https://www.thinh.tech/about",
        "https://www.thinh.tech/404",
        "https://www.thinh.tech/project/the-beginn",
        "https://www.thinh.tech/project/moddy",
      ]
    }
  ), robots({
    host: "www.thinh.tech",
    sitemap: ['https://www.thinh.tech/sitemap.xml']
  }), compress()]
});