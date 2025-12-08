import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import sanity from '@sanity/astro';
import { loadEnv } from "vite";
import vercel from '@astrojs/vercel';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

const PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID ;
const DATASET = process.env.PUBLIC_SANITY_DATASET || env.PUBLIC_SANITY_DATASET;

export default defineConfig({
  site: 'https://evatorresmoda.com',
  
  output: 'server',

  adapter: vercel(),

  integrations: [
    sitemap(),
    react(),
    svelte(), 
    sanity({
      projectId: PROJECT_ID,
      dataset: DATASET,
      useCdn: false,
      apiVersion: '2024-03-01',
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});