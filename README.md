# GymGear Guide — free installable PWA starter

A small, fully static Astro 7 gym product buying-guide website with working searchable guides, six example pages, reusable layouts, PWA icon/manifest/service-worker integration, and Cloudflare Pages deployment support. **All guides are research-writing examples; there are no invented personal product tests, prices, or affiliate links.**

## Requirements
- Node.js **22.12+** (even-numbered supported release; Node 22 LTS recommended)
- npm, VS Code, and optionally Git/GitHub

## Start locally
```bash
npm install
npm run dev
```
Open the local URL printed by Astro (typically `http://localhost:4321`).

## Test installation behavior
```bash
npm run build
npm run preview
```
Open the preview URL in Chrome or Edge; inspect DevTools → Application → Manifest / Service Workers. Use the browser install menu when available. **Installability is best checked against the final HTTPS site**, not the Astro development server. On iPhone, use the browser Share menu → Add to Home Screen.

## Deploy free via Cloudflare Pages
1. Create a new GitHub repository (`gymgear-pwa-starter`) and upload these files; do not include `node_modules` or `dist`.
2. Cloudflare dashboard → Workers & Pages → Create application → Pages → Import an existing Git repository.
3. Select your repository.
4. Build command: `npm run build`; output directory: `dist`; production branch: `main`.
5. Save and Deploy. Your site is assigned a free `*.pages.dev` URL.
6. Future commits to the connected GitHub branch redeploy automatically.

## Customize before publishing
- Replace placeholder website name if needed (`astro.config.mjs`, layout, footer).
- Replace `hello@example.com` in Contact.
- Replace sample guides with honest, fact-checked research and current specifications.
- Update About/Privacy/Disclosure to match your practices and local regulations.
- Do not imply you tested a product you haven't tested.
- Add actual affiliate links **only after program approval**, with nearby disclosure and `rel="sponsored"`.
- If you add external services (analytics, email capture, ads), update Privacy and consent controls where required.
- Add a site URL and a sitemap integration before your full SEO launch.

## File map
- `src/pages/index.astro` — homepage and live client-side search/filter
- `src/pages/guides/[slug].astro` — individual guide route
- `src/data/guides.ts` — editable example guide data
- `src/layouts/BaseLayout.astro` — shared header, footer, manifest tags
- `src/styles.css` — mobile-responsive design
- `src/pwa.ts` — service worker registration
- `astro.config.mjs` — Astro and PWA manifest/workbox configuration
- `public/icons/` — installable PNG app icons

No paid API, database, store account, or domain is needed for this starter. Cloudflare and GitHub free-tier limits apply.
