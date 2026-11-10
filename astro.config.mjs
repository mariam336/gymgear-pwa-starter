import { defineConfig } from 'astro/config';
import { AstroPWAIntegration } from '@vite-pwa/astro';

export default defineConfig({
  output: 'static',
  integrations: [
    AstroPWAIntegration({
      registerType: 'autoUpdate',
      manifest: {
        name: 'GymGear Guide — Smart Fitness Buying Guides',
        short_name: 'GymGear',
        description: 'Simple, independent buying guides for home gym equipment and fitness accessories.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f5f6f1',
        theme_color: '#151b1b',
        icons: [
          { src: '/icons/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{html,css,js,json,svg,png,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024
      }
    })
  ]
});
