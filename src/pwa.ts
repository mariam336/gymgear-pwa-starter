import { registerSW } from 'virtual:pwa-register';

// The service worker will be generated during `npm run build`.
registerSW({ immediate: true });
