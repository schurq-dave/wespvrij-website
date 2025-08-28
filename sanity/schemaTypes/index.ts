import { type SchemaTypeDefinition } from 'sanity'

import { serviceType } from './serviceType'
import { locationType } from './locationType'
import { testimonialType } from './testimonialType'
import { siteSettingsType } from './siteSettingsType'
import { contactSubmissionType } from './contactSubmissionType'
import { homepageContentType } from './homepageContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsType,
    homepageContentType,
    serviceType,
    locationType,
    testimonialType,
    contactSubmissionType,
  ],
}
