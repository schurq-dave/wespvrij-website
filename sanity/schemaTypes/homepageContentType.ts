import { defineField, defineType, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homepageContentType = defineType({
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
      icon: HomeIcon,
      default: true,
    },
    {
      name: 'features',
      title: 'Features',
    },
    {
      name: 'problem',
      title: 'Problem Info',
    },
    {
      name: 'process',
      title: 'Process Steps',
    },
    {
      name: 'contact',
      title: 'Contact Form',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Internal title for reference',
      initialValue: 'Homepage Content',
      validation: (rule) => rule.required().error('Title is required'),
      group: 'hero',
    }),
    
    // Hero Section
    defineField({
      name: 'heroTitle',
      type: 'string',
      description: 'Main hero title (e.g., "Wespvrij binnen 24 uur")',
      initialValue: 'Wespvrij binnen 24 uur',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'text',
      description: 'Hero subtitle text',
      initialValue: 'Gegarandeerd resultaat of geld terug.',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      description: 'Main hero image',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),

    // Features Section
    defineField({
      name: 'features',
      type: 'array',
      description: 'Main features displayed below hero section',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'string',
              description: 'Icon name (clock, shield, award)',
              options: {
                list: [
                  { title: 'Clock (24/7)', value: 'clock' },
                  { title: 'Shield (Guarantee)', value: 'shield' },
                  { title: 'Award (Certified)', value: 'award' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'title',
              type: 'string',
              description: 'Feature title',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              description: 'Feature description',
              validation: (rule) => rule.required().max(200),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
      validation: (rule) => rule.max(3).warning('Maximum 3 features recommended'),
      group: 'features',
    }),

    // Problem Information Section
    defineField({
      name: 'problemSectionTitle',
      type: 'string',
      description: 'Problem section title',
      initialValue: 'Wat te doen bij een wespenprobleem?',
      group: 'problem',
    }),
    defineField({
      name: 'problemParagraphs',
      type: 'array',
      description: 'Problem section text paragraphs',
      of: [
        defineArrayMember({
          type: 'text',
        }),
      ],
      group: 'problem',
    }),
    defineField({
      name: 'problemTipTitle',
      type: 'string',
      description: 'Important tip title',
      initialValue: 'Belangrijke Tip',
      group: 'problem',
    }),
    defineField({
      name: 'problemTipText',
      type: 'text',
      description: 'Important tip content',
      group: 'problem',
    }),
    defineField({
      name: 'problemImage',
      type: 'image',
      description: 'Problem section image',
      options: {
        hotspot: true,
      },
      group: 'problem',
    }),
    defineField({
      name: 'problemStatNumber',
      type: 'string',
      description: 'Statistics number (e.g., "5000")',
      initialValue: '5000',
      group: 'problem',
    }),
    defineField({
      name: 'problemStatText',
      type: 'string',
      description: 'Statistics description (e.g., "wespen per nest")',
      initialValue: 'wespen per nest',
      group: 'problem',
    }),

    // Process Section
    defineField({
      name: 'processSectionTitle',
      type: 'string',
      description: 'Process section main title',
      initialValue: 'Hoe werkt het?',
      group: 'process',
    }),
    defineField({
      name: 'processSectionSubtitle',
      type: 'string',
      description: 'Process section subtitle',
      initialValue: 'Simpel en effectief - van melding tot oplossing in 4 stappen',
      group: 'process',
    }),
    defineField({
      name: 'processSteps',
      type: 'array',
      description: 'Process steps',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              type: 'number',
              description: 'Step number',
              validation: (rule) => rule.required().min(1).max(10),
            }),
            defineField({
              name: 'title',
              type: 'string',
              description: 'Step title',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              description: 'Step description',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              stepNumber: 'stepNumber',
              title: 'title',
            },
            prepare(selection) {
              const { stepNumber, title } = selection
              return {
                title: `${stepNumber}. ${title}`,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.max(6).warning('Maximum 6 steps recommended'),
      group: 'process',
    }),
    defineField({
      name: 'processImage',
      type: 'image',
      description: 'Process section image',
      options: {
        hotspot: true,
      },
      group: 'process',
    }),

    // Contact Form Section
    defineField({
      name: 'contactFormTitle',
      type: 'string',
      description: 'Contact form section title',
      initialValue: 'Gratis Offerte Aanvragen',
      group: 'contact',
    }),
    defineField({
      name: 'contactFormSubtitle',
      type: 'text',
      description: 'Contact form section subtitle',
      initialValue: 'Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte',
      group: 'contact',
    }),
    defineField({
      name: 'contactFormButtonText',
      type: 'string',
      description: 'Contact form submit button text',
      initialValue: 'Verstuur Aanvraag',
      group: 'contact',
    }),

    // CTA Section
    defineField({
      name: 'ctaTitle',
      type: 'string',
      description: 'Call-to-action section title',
      initialValue: 'Klaar om van uw wespenprobleem af te komen?',
      group: 'contact',
    }),
    defineField({
      name: 'ctaSubtitle',
      type: 'text',
      description: 'Call-to-action section subtitle',
      group: 'contact',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || 'Homepage Content',
        subtitle: 'Manage homepage sections',
        media: HomeIcon,
      }
    },
  },
}) 