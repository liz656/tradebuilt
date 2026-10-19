// Generated sitemap: indexable pages only, on the configured primary host
// (astro.config.mjs `site`). Canonicals use trailing slashes, so the sitemap does too.
import { trades } from '../data/trades.js';
import { AMERICAN_TRADES_PUBLISHED } from '../data/site.js';

export function GET({ site }) {
  const base = (site ?? new URL('https://tradebuiltga.com')).href.replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);
  const pages = [
    ['/', '1.0'],
    ['/our-work/', '0.8'],
    ['/research-insights/', '0.8'],
    ['/study/', '0.8'],
    ['/careers/', '0.8'],
    ['/find-training/', '0.8'],
    ['/about/', '0.8'],
    ['/contact/', '0.6'],
    ...(AMERICAN_TRADES_PUBLISHED ? [['/american-trades/', '0.7']] : []),
    ...trades.map((t) => [`/trades/${t.slug}/`, '0.7']),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr]) => `  <url>\n    <loc>${base}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr}</priority>\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
