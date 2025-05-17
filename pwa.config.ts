import type { Config } from './types';

export default {
  id: '/',
  name: 'The Lady Savings',
  shortName: 'The Lady Savings',
  description: 'Your #1 source for weekly savings! Visit TheLadySavings.com for top deals, discounts, and practical tips to keep more money in your wallet.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Weekly Ads',
      shortName: 'Weekly Ads',
      description: 'View sales flyer for this week and weekly ad for next week, browse all the current specials circular and start saving.',
      url: '/search/label/Weekly%20Ads?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
