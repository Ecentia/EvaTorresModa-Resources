import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// EN EL NAVEGADOR (Client-side):
// Usamos import.meta.env para acceder a las variables PUBLIC_ de Astro/Vite.
// No uses process.env ni loadEnv aquí.
const PROJECT_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const DATASET = import.meta.env.PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'default',
  title: 'evatorres-web',

  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})