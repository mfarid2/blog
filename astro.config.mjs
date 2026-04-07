// @ts-check
import { defineConfig } from 'astro/config';
import { searchForWorkspaceRoot } from 'vite';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://mfarid2-blog.netlify.app",
  integrations: [preact()],
  vite: {
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          process.env.PNPM_HOME || '',
        ],
      },
    },
  },
});
