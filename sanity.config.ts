import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// 🌍 Capturamos las variables de entorno
const PROJECT_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const DATASET = import.meta.env.PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'default',
  title: 'Eva Torres Moda', // 🎀 Título más bonito

  projectId: PROJECT_ID,
  dataset: DATASET,

  // ✅ ESTA ES LA CLAVE PARA QUE NO DE EL ERROR "TOOL NOT FOUND"
  basePath: '/admin', 

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})