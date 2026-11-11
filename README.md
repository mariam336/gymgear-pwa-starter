# FitGear Review Hub — Astro + Free PWA + Pages CMS

An editorial fitness-equipment affiliate publication **starter/upgrade**, built for Astro 7, Cloudflare Pages, and GitHub, with a free GitHub-based CMS option. The website intentionally uses **clearly labeled demo content**, not invented brand reviews, tests, prices, offers or testimonials.

## Step-by-step: upgrade your existing GymGear project (Windows)

Your working Git repository, according to the previous terminal output, is:

`C:\Users\Admin\Desktop\gymgear-pwa-starter\gymgear-pwa-starter`

1. Back up this entire existing project folder. Do **not** delete its `.git` folder.
2. Download/extract the upgrade ZIP into a separate temporary folder. Inside it is a `gymgear-pwa-starter` folder.
3. Copy all the **contents** of the new `gymgear-pwa-starter` folder into your existing working project folder (the one containing the `.git` folder). Replace existing files when prompted. Copy hidden files as well, including `.pages.yml`, `.nvmrc`, and `.gitignore`. **Do not replace or delete `.git`.**
4. Remove obsolete **starter-only** files that were replaced by the new routes: `src/pages/guides/` folder, `src/data/guides.ts`, `src/pages/privacy.astro`, and `src/pages/disclosure.astro`. Only remove these four paths after making your backup. The Cloudflare `_redirects` file now handles the legacy URLs.
5. In VS Code, open the existing working project folder, then run these commands **one at a time**:

```powershell
npm install
npm run dev
```

6. View `http://localhost:4321/` and test homepage, archives, categories, search, and compare tool.
7. Stop the dev server (Ctrl+C), then run:

```powershell
npm run build
npm run preview
```

8. If the build succeeds, push **into your existing connected GitHub repository**:

```powershell
git add .
git commit -m "Upgrade to FitGear Review Hub"
git push origin main
```

9. Your existing Cloudflare Pages Git deployment should rebuild. Keep its existing **`npm run build` / `dist`** settings.

### If you need a new repository instead

Use the usual `git init`, GitHub remote, and Cloudflare Pages workflow, but **do not** do this for your already-connected repository.

## Features implemented

- Premium dark-charcoal / forest-green / lime editorial theme; responsive navigation and dropdown
- Homepage hero, eight functional categories, featured rounds, demo product reviews, methodology and trust sections
- Markdown content collections with editorial status (`draft`, `demo`, `published`)
- Individual review, comparison, roundup, buying guide, and advice page templates
- Article metadata, table of contents, quick verdicts, honest affiliate disclosure and product cards
- Searchable archive pages with filters, sorting, and load-more pagination
- Interactive compare tool for two or three editable demo equipment records
- Technical SEO foundation: metadata, Open Graph, JSON-LD (Organization/WebSite/BlogPosting), sitemap-index.xml and robots.txt
- PWA manifest and service worker; original app icons updated for FitGear branding
- Policy pages and 404 page, legacy URL redirects for Cloudflare Pages
- Configuration for Pages CMS editing through GitHub, with product records and site settings

## Important: make SEO URLs accurate

Before uploading to Cloudflare, replace the example fallback `https://gymgear-pwa-starter.pages.dev` with your **exact working URL**:

- In `astro.config.mjs`, the fallback URL for `SITE_URL`, or set Cloudflare Pages environment variable `SITE_URL` to the correct public URL.
- In `public/robots.txt`, replace the sitemap URL with your real URL + `/sitemap-index.xml`.
- In `src/data/settings.json`, set `siteUrl` to your live URL.

Do not submit a sitemap with the wrong address. Astro's sitemap integration generates `sitemap-index.xml` by default.

## Edit the site without coding (Pages CMS)

The project includes `.pages.yml`, defining editable collections for articles, product examples, and site settings.

1. Push the upgraded site to GitHub, including `.pages.yml`.
2. Go to https://pagescms.org/ and sign in/authorize access to your GitHub account and repo.
3. Open your project in Pages CMS; edit a Markdown article under one of five collections.
4. Start articles as `draft` (not shown on the site). `demo` entries render with a clear warning and are marked `noindex`. Set `status: published` only when the editorial details are verified.
5. Save the article. Pages CMS writes the change to GitHub, triggering your connected Cloudflare Pages build. Check that the build succeeds and the article appears at the intended URL.

**Security:** Pages CMS needs your explicit GitHub authorization. We haven't connected your account or tested access. The site has no built-in authenticated `/admin` route.

### Content collections

| Folder | URL prefix |
|---|---|
| `src/content/reviews/` | `/reviews/slug/` |
| `src/content/best/` | `/best/slug/` |
| `src/content/comparisons/` | `/compare/slug/` |
| `src/content/buyingGuides/` | `/buying-guides/slug/` |
| `src/content/fitnessAdvice/` | `/fitness-advice/slug/` |

Files contain YAML frontmatter and Markdown bodies. The filename becomes the URL slug. Editing and saving the article through Pages CMS changes source data, not the site templates.

## Add legitimate products and affiliate links

Products live in `src/data/products.json` and are editable in Pages CMS. The shipped entries are generic equipment examples: `published:false`, **no real brands**, no verified prices, and no retailer links. Article frontmatter `productIds` selects product records used in a review.

When you research a real product, replace the example name and write verified specs, clear sources and limitations; add approved `retailers` entries with `{name,url}` only after your affiliate account is approved. Link buttons are intentionally absent if no valid approved retailer links exist. When an approved link is displayed, it uses `rel="sponsored noopener noreferrer"` and is preceded by an affiliate disclosure.

No fabricated product star ratings, sales counts, test photos or customer quotes are included. Product pictures should be your own or properly licensed; the included images are **original illustrations**, not specific product photos.

## Contact form, newsletter, and analytics: not automatically active

- Contact form: set `contactEmail` in `src/data/settings.json`. The form then opens an email application with drafted content; it **does not transmit or store messages** on your site. A true server-side submission workflow would require a connected service and spam protection.
- Newsletter: shown as **Coming Soon** until you configure a consent-aware email marketing service with a real unsubscribe workflow. No fake signup form.
- Analytics and Search Console: placeholders available in site settings; external accounts still require owner setup. No tracking code is enabled by default.
- Author details and legal text need owner review before production.

## Free hosting and limits

The project is fully static. Cloudflare Pages: build command `npm run build`, output folder `dist`. Free-tier limits and third-party provider terms can change.

## Local checks

```powershell
npm install
npm run build
npm run preview
```

Verify each navigation link, the eight categories, comparison widget, keyboard focus, and responsive layout on a phone. The PWA is best tested after `npm run build && npm run preview` or on HTTPS after deployment.

**Note about build verification of this ZIP:** This environment cannot access the npm package registry, so a full Astro build was not executed here. The project includes structural checks and example content; please run the build locally and share any error output for a targeted fix.
