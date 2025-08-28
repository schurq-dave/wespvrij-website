import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

// Use actual values for hosted studio compatibility
const projectId = '6vd5j5gs'
const dataset = 'production'
const apiVersion = '2025-08-28'

export default defineConfig({
  name: 'wespvrij-studio',
  title: 'WESPVRIJ CMS',
  
  projectId,
  dataset,
  
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  
  schema,
  
  basePath: '/studio',
}) 