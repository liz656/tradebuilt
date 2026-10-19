import { defineConfig } from 'astro/config';

// Primary host for canonicals, Open Graph URLs and the sitemap.
// Defaults to the current production domain. For the planned tradebuiltusa.com
// move, set SITE_URL in Netlify ONLY at cutover (see docs/domain-migration.md).
export default defineConfig({
  site: process.env.SITE_URL || 'https://tradebuiltga.com',
});
