/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface Window {
  loadGoogleAnalytics: () => void;
  gaLoaded?: boolean;
  dataLayer?: any[];
}