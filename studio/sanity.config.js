import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import BrandLogo from './src/logo/logo'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: '34r2m7j6',
  dataset: 'production',
   studio: {
    components: {
      logo: BrandLogo,
    },
  },

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
