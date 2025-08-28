import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'customerName',
      type: 'string',
      description: 'Full name of the customer',
      validation: (rule) => rule.required().error('Customer name is required'),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'City or area where the customer is located',
      validation: (rule) => rule.required().error('Customer location is required'),
    }),
    defineField({
      name: 'text',
      type: 'text',
      description: 'The customer testimonial text',
      validation: (rule) => 
        rule
          .required()
          .error('Testimonial text is required')
          .max(300)
          .warning('Keep testimonials concise (under 300 characters)'),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      description: 'Star rating from 1 to 5',
      validation: (rule) => 
        rule
          .required()
          .error('Rating is required')
          .min(1)
          .max(5)
          .integer()
          .error('Rating must be between 1 and 5'),
      initialValue: 5,
    }),
    defineField({
      name: 'serviceType',
      type: 'string',
      description: 'Type of service the customer received',
      options: {
        list: [
          { title: 'Wespenbestrijding', value: 'wespenbestrijding' },
          { title: 'Hoornaarbestrijding', value: 'hoornaarbestrijding' },
          { title: 'Preventieve behandeling', value: 'preventieve-behandeling' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      description: 'Customer avatar or photo (optional)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      type: 'string',
      description: 'Show this testimonial prominently',
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Standard', value: 'standard' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'dateReceived',
      type: 'date',
      description: 'When this testimonial was received',
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'location',
      rating: 'rating',
      text: 'text',
      media: 'avatar',
    },
    prepare(selection) {
      const { title, subtitle, rating, text, media } = selection
      const stars = '★'.repeat(rating || 5)
      const preview = text ? text.slice(0, 60) + '...' : ''
      
      return {
        title: `${title} (${stars})`,
        subtitle: `${subtitle} • ${preview}`,
        media: media || UserIcon,
      }
    },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'rating', direction: 'desc' },
        { field: 'dateReceived', direction: 'desc' },
      ],
    },
    {
      title: 'Highest Rating',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
    {
      title: 'Most Recent',
      name: 'dateDesc',
      by: [{ field: 'dateReceived', direction: 'desc' }],
    },
  ],
}) 