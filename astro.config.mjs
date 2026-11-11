import { defineConfig } from 'astro/config';
import { AstroPWAIntegration } from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Replace SITE_URL with your actual public Cloudflare Pages address before SEO submission.
const publicUrl = process.env.SITE_URL || 'https://gymgear-pwa-starter.pages.dev';
// Exclude draft/demo article pages from the sitemap until they become real, verified publications.
const excludedFromSitemap = new Set();
for (const [folder, prefix] of [['best', '/best/'],['reviews', '/reviews/'],['comparisons','/compare/'],['buyingGuides','/buying-guides/'],['fitnessAdvice','/fitness-advice/']]) {
  const dir = join(process.cwd(), 'src', 'content', folder);
  try {
    for (const filename of readdirSync(dir)) {
      if (!filename.endsWith('.md')) continue;
      const source = readFileSync(join(dir, filename), 'utf8').split('---', 3)[1] || '';
      if (/^status:\s*["']?(draft|demo)["']?\s*$/m.test(source)) excludedFromSitemap.add(prefix + filename.slice(0, -3) + '/');
    }
  } catch { /* The directory is optional until an editor adds articles. */ }
}

export default defineConfig({
  site: publicUrl,
  output: 'static',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/search/') && ![...excludedFromSitemap].some(path => new URL(page).pathname === path) }),
    AstroPWAIntegration({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'FitGear Review Hub — Smart Fitness Equipment Guides',
        short_name: 'FitGear',
        description: 'Independent fitness gear research, comparisons and buying guides.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#F8F9F6',
        theme_color: '#171C20',
        icons: [
          { src: '/icons/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      generateSW: {
        globPatterns: ['**/*.{html,css,js,json,svg,png,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024
      }
    })
  ]
});
