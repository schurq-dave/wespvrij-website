import { defineField, defineType } from 'sanity'
import { WrenchIcon } from '@sanity/icons'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The name of the service (e.g., Wespenbestrijding)',
      validation: (rule) => rule.required().error('Service title is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required for URL generation'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Brief description of what this service includes',
      validation: (rule) => rule.max(200).warning('Keep description concise (under 200 characters)'),
    }),
    defineField({
      name: 'price',
      type: 'string',
      description: 'Price in euros (e.g., €89)',
      validation: (rule) => rule.required().error('Price is required'),
    }),
    defineField({
      name: 'features',
      type: 'array',
      description: 'List of features included in this service',
      of: [
        defineField({
          name: 'feature',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'status',
      type: 'string',
      description: 'Service availability status',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Inactive', value: 'inactive' },
          { title: 'Popular', value: 'popular' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order on the website (lower numbers appear first)',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      status: 'status',
    },
    prepare(selection) {
      const { title, price, status } = selection
      return {
        title,
        subtitle: `${price} • ${status}`,
        media: WrenchIcon,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
}) 