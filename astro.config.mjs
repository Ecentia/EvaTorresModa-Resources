// ecentia/evatorresmoda-resources/evatorresmoda-Resources-master/astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

const PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.PUBLIC_SANITY_DATASET || env.PUBLIC_SANITY_DATASET;

export default defineConfig({
  site: 'https://www.evatorresmoda.com',
  // IMPORTANTE: No activar 'base' si usas dominio propio (evatorresmoda.com)
  
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: PROJECT_ID,
      dataset: DATASET,
      useCdn: false,
      apiVersion: '2024-03-01',
      // CORRECCIÓN: Forzamos el path /admin para que se compile también en producción/build.
      studioBasePath: '/admin', 
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  // Esto asegura que Astro sepa que es una web estática
  output: 'static'
});