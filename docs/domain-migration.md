# tradebuiltusa.com migration — prepared, NOT executed

Status: **gated.** Nothing in this branch changes DNS, Netlify domains, email, or redirects.
The site keeps serving and canonicalizing on `https://tradebuiltga.com` until the owner approves cutover.

## What was observed (Oct 19, 2026, read-only)

| Check | Result | Confidence |
|---|---|---|
| `https://tradebuiltusa.com/` | **302 → `https://tradebuiltga.com/`** (temporary redirect) | Observed via web fetch |
| `https://tradebuiltusa.com/study/`, `https://www.tradebuiltusa.com/careers/` | Fetch failed — path preservation and `www` behavior unknown | Unverified |
| DNS (A/CNAME/MX/NS/TXT) for both domains | Could not query from this environment | Unverified |
| Who registers/hosts DNS for each domain (GoDaddy per README vs Netlify DNS) | Unknown | Unverified |
| Mailbox for `liz@tradebuiltusa.com` | Chosen as the public address (owner, Oct 19). Delivery not yet tested | **Send a test from an outside account before release** |
| TLS certificate covering tradebuiltusa.com / www | Unknown | Unverified |
| Search Console properties | Unknown | Unverified |

The current 302 looks like a registrar "forwarding" rule. A 302 does not pass ranking signals and probably sends every path to the homepage — fix this during cutover, not before.

## What this branch already prepares

- `astro.config.mjs` reads `SITE_URL` (defaults to `https://tradebuiltga.com`). Canonicals, Open Graph URLs and `sitemap.xml` all derive from it, so cutover is one environment variable — not a code change.
- All routes are unchanged, so the move is a 1:1 path map: `/`, `/study/`, `/careers/`, `/find-training/`, `/about/`, `/trades/<slug>/`, `/study/<survey>/`, `/thank-you/`, plus new `/our-work/`, `/research-insights/`, `/contact/`. Fragment IDs (`#trades`, `#report-updates`, `#conversations`) are identical on both hosts.
- `robots.txt` still points to the GA sitemap. Update it in the cutover commit (below).

## Cutover runbook (owner approval required at step 4)

1. **Inventory & snapshot** — In Netlify: note the site's current custom domains, primary domain, and the last good deploy ID (rollback target). At the registrar(s): screenshot/export DNS zones for **both** domains, especially MX, SPF/DKIM/DMARC TXT records. Export Netlify Forms submissions (CSV) for every form.
2. **Email first, separately** — Confirm whether `liz@tradebuiltusa.com` receives mail (send a test from an outside account). Do **not** change MX records as part of the web move. The site already uses the USA address (`CONTACT_EMAIL`), so this must work before the repositioning release, not just the domain move.
3. **Stage the domain** — In Netlify → Domain management, add `tradebuiltusa.com` and `www.tradebuiltusa.com` as domain aliases (not primary yet). Point DNS per Netlify's instructions; remove the registrar forwarding rule at the same time. Wait for Netlify to issue the certificate covering all four hostnames.
4. **Cut over (approval)** — Set `tradebuiltusa.com` as the **primary domain** in Netlify. Netlify then 301-redirects every alias (`tradebuiltga.com`, `www.*`) to the same path on the primary in one hop. Set `SITE_URL=https://tradebuiltusa.com` in Netlify environment variables and update `public/robots.txt` sitemap line; redeploy.
5. **Verify** — For each of apex/www × GA/USA × http/https: `/`, `/study/`, `/careers/#trades`, `/trades/hvac/`, `/find-training/`, `/about/`, a query string (`/careers/?utm_source=test`), and a 404. Expect one 301 hop to `https://tradebuiltusa.com/<same path>`; no loops; valid TLS. Submit one test each through Report Updates and Contact and confirm delivery. Check canonical + og:url on three pages.
6. **Discovery** — Add/verify the USA property in Google Search Console, run Change of Address from the GA property, submit `https://tradebuiltusa.com/sitemap.xml`. Update GA4 data stream URL, social profile links, email signatures, and any PDFs/QR codes that hard-code tradebuiltga.com.
7. **Keep GA forever** — Keep tradebuiltga.com registered, on Netlify as an alias, with TLS and redirects active.

## Rollback

Netlify → set `tradebuiltga.com` back as primary, remove `SITE_URL` (or set it to the GA URL), revert robots.txt, redeploy the noted deploy ID. Do not add opposing redirects. DNS can stay pointed at Netlify — the primary-domain setting controls redirect direction.

## Social handles

Footer links use `linkedin.com/company/tradebuiltga`, `instagram.com/tradebuiltga`, `tiktok.com/@tradebuiltliz`. They stay as-is; change them only if the handles themselves change.

`/portfolio` was retired Oct 2026 and 301-redirects to `/about/` (netlify.toml). Netlify applies it on both hosts after cutover.
