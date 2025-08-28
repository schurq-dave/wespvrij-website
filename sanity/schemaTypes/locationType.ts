import { defineField, defineType, defineArrayMember } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const locationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Info',
      icon: PinIcon,
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'City or location name (e.g., Alkmaar)',
      validation: (rule) => rule.required().error('Location name is required'),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL-friendly version of the location name',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required for URL generation'),
      group: 'basic',
    }),
    defineField({
      name: 'region',
      type: 'string',
      description: 'Province or region (e.g., Noord-Holland)',
      initialValue: 'Noord-Holland',
      group: 'basic',
    }),
    defineField({
      name: 'population',
      type: 'string',
      description: 'Population count (e.g., 109.000)',
      group: 'basic',
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Brief description of services in this location',
      validation: (rule) => rule.max(200).warning('Keep description concise (under 200 characters)'),
      group: 'content',
    }),
    defineField({
      name: 'localInfo',
      type: 'text',
      description: 'Detailed information about the area and local service approach',
      validation: (rule) => rule.max(500).warning('Keep local info under 500 characters'),
      group: 'content',
    }),
    defineField({
      name: 'serviceHighlights',
      type: 'array',
      description: 'Key service highlights specific to this location',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.max(5).warning('Maximum 5 service highlights recommended'),
      group: 'content',
    }),
    defineField({
      name: 'nearbyAreas',
      type: 'array',
      description: 'Nearby cities and areas served from this location',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      description: 'Customer testimonials specific to this location',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'testimonial' },
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      description: 'Image representing this location or local service work',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'localKeywords',
      type: 'array',
      description: 'SEO keywords specific to this location',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.max(10).warning('Maximum 10 keywords recommended'),
      group: 'seo',
    }),
    defineField({
      name: 'metaTitle',
      type: 'string',
      description: 'Custom meta title for SEO (optional)',
      validation: (rule) => rule.max(60).warning('Meta title should be under 60 characters'),
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      description: 'Custom meta description for SEO (optional)',
      validation: (rule) => rule.max(160).warning('Meta description should be under 160 characters'),
      group: 'seo',
    }),
    defineField({
      name: 'priority',
      type: 'number',
      description: 'Display priority (lower numbers appear first)',
      initialValue: 10,
      group: 'basic',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      region: 'region',
      population: 'population',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, region, population, media } = selection
      const subtitle = `${region}${population ? ` • ${population} inwoners` : ''}`
      
      return {
        title,
        subtitle,
        media: media || PinIcon,
      }
    },
  },
  orderings: [
    {
      title: 'Priority',
      name: 'priorityAsc',
      by: [{ field: 'priority', direction: 'asc' }],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Population (High to Low)',
      name: 'populationDesc',
      by: [{ field: 'population', direction: 'desc' }],
    },
  ],
}) 