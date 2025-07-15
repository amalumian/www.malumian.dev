// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import {remarkReadingTime} from './plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://www.malumian.dev',
  redirects: {
    '/about/': '/',
  },
  prefetch: true,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('tags') && !page.includes('history'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
    remarkPlugins: [remarkReadingTime],
  },
  devToolbar: {
    enabled: false,
  },
});
