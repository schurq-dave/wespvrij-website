import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'general',
      title: 'General',
      icon: CogIcon,
      default: true,
    },
    {
      name: 'contact',
      title: 'Contact Info',
    },
    {
      name: 'seo',
      title: 'SEO & Meta',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Site title for internal reference',
      initialValue: 'WESPVRIJ Website Settings',
      validation: (rule) => rule.required().error('Site title is required'),
      group: 'general',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      description: 'Company logo displayed in header',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Logo is required'),
      group: 'general',
    }),
    defineField({
      name: 'companyName',
      type: 'string',
      description: 'Official company name',
      initialValue: 'WESPVRIJ',
      validation: (rule) => rule.required().error('Company name is required'),
      group: 'general',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      description: 'Company tagline or slogan',
      initialValue: 'Professionele wespenbestrijding in Noord-Holland',
      group: 'general',
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      description: 'Main contact phone number',
      validation: (rule) => rule.required().error('Phone number is required'),
      group: 'contact',
    }),
    defineField({
      name: 'email',
      type: 'string',
      description: 'Main contact email address',
      validation: (rule) => rule.required().email().error('Valid email address is required'),
      group: 'contact',
    }),
    defineField({
      name: 'address',
      type: 'text',
      description: 'Business address',
      group: 'contact',
    }),
    defineField({
      name: 'serviceArea',
      type: 'string',
      description: 'Main service area description',
      initialValue: 'Noord-Holland',
      group: 'contact',
    }),
    defineField({
      name: 'availability',
      type: 'string',
      description: 'Service availability hours',
      initialValue: '24/7 beschikbaar',
      group: 'contact',
    }),
    defineField({
      name: 'guaranteeText',
      type: 'string',
      description: 'Guarantee or warranty text',
      initialValue: 'Seizoensgarantie - komt het probleem terug, dan ook wij terug',
      group: 'general',
    }),
    defineField({
      name: 'experienceYears',
      type: 'number',
      description: 'Years of experience',
      initialValue: 15,
      group: 'general',
    }),
    defineField({
      name: 'customerCount',
      type: 'string',
      description: 'Total customer count for display',
      initialValue: '1000+',
      group: 'general',
    }),
    defineField({
      name: 'averageRating',
      type: 'number',
      description: 'Average customer rating (out of 5)',
      validation: (rule) => rule.min(1).max(5),
      initialValue: 4.9,
      group: 'general',
    }),
    defineField({
      name: 'defaultMetaTitle',
      type: 'string',
      description: 'Default meta title for pages without custom titles',
      validation: (rule) => rule.max(60).warning('Meta title should be under 60 characters'),
      group: 'seo',
    }),
    defineField({
      name: 'defaultMetaDescription',
      type: 'text',
      description: 'Default meta description for pages without custom descriptions',
      validation: (rule) => rule.max(160).warning('Meta description should be under 160 characters'),
      group: 'seo',
    }),
    defineField({
      name: 'socialMediaLinks',
      type: 'object',
      description: 'Social media profiles',
      fields: [
        defineField({
          name: 'facebook',
          type: 'url',
          description: 'Facebook page URL',
        }),
        defineField({
          name: 'instagram',
          type: 'url',
          description: 'Instagram profile URL',
        }),
        defineField({
          name: 'linkedin',
          type: 'url',
          description: 'LinkedIn company page URL',
        }),
      ],
      group: 'contact',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tagline',
      media: 'logo',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Site Settings',
        subtitle: subtitle || 'Configure website settings',
        media: media || CogIcon,
      }
    },
  },
}) 