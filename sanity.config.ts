import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'

import { schema } from './sanity/schemaTypes'

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
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  
  schema,
  
  basePath: '/studio',
}) 