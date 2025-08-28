import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [
    {
      name: 'contact',
      title: 'Contact Details',
      icon: EnvelopeIcon,
      default: true,
    },
    {
      name: 'request',
      title: 'Request Details',
    },
    {
      name: 'status',
      title: 'Status',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Customer full name',
      validation: (rule) => rule.required().error('Customer name is required'),
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      description: 'Customer phone number',
      validation: (rule) => rule.required().error('Phone number is required'),
      group: 'contact',
    }),
    defineField({
      name: 'email',
      type: 'string',
      description: 'Customer email address',
      validation: (rule) => rule.email().error('Must be a valid email address'),
      group: 'contact',
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'Customer location/city',
      validation: (rule) => rule.required().error('Location is required'),
      group: 'contact',
    }),
    defineField({
      name: 'problemDescription',
      type: 'text',
      description: 'Description of the wasp problem',
      group: 'request',
    }),
    defineField({
      name: 'urgency',
      type: 'string',
      description: 'How urgent is the request',
      options: {
        list: [
          { title: 'Emergency (immediate)', value: 'emergency' },
          { title: 'Urgent (within 24h)', value: 'urgent' },
          { title: 'Standard (within week)', value: 'standard' },
          { title: 'Non-urgent', value: 'non-urgent' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
      group: 'request',
    }),
    defineField({
      name: 'preferredContactMethod',
      type: 'string',
      description: 'How the customer prefers to be contacted',
      options: {
        list: [
          { title: 'Phone', value: 'phone' },
          { title: 'Email', value: 'email' },
          { title: 'Either', value: 'either' },
        ],
        layout: 'radio',
      },
      initialValue: 'phone',
      group: 'contact',
    }),
    defineField({
      name: 'submissionDate',
      type: 'datetime',
      description: 'When the form was submitted',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      group: 'status',
    }),
    defineField({
      name: 'status',
      type: 'string',
      description: 'Current status of this request',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
      group: 'status',
    }),
    defineField({
      name: 'assignedTo',
      type: 'string',
      description: 'Team member assigned to handle this request',
      group: 'status',
    }),
    defineField({
      name: 'notes',
      type: 'text',
      description: 'Internal notes about this submission',
      group: 'status',
    }),
    defineField({
      name: 'followUpDate',
      type: 'date',
      description: 'When to follow up with this customer',
      group: 'status',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      phone: 'phone',
      location: 'location',
      status: 'status',
      urgency: 'urgency',
      submissionDate: 'submissionDate',
    },
    prepare(selection) {
      const { title, phone, location, status, urgency, submissionDate } = selection
      const statusIcon = status === 'new' ? '🆕' : status === 'completed' ? '✅' : '📞'
      const urgencyIcon = urgency === 'emergency' ? '🚨' : urgency === 'urgent' ? '⚡' : ''
      const date = submissionDate ? new Date(submissionDate).toLocaleDateString() : ''
      
      return {
        title: `${statusIcon} ${title}`,
        subtitle: `${location} • ${phone} • ${urgencyIcon} ${date}`,
        media: EnvelopeIcon,
      }
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'submissionDate', direction: 'desc' }],
    },
    {
      title: 'By Status',
      name: 'byStatus',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'submissionDate', direction: 'desc' },
      ],
    },
    {
      title: 'By Urgency',
      name: 'byUrgency',
      by: [
        { field: 'urgency', direction: 'asc' },
        { field: 'submissionDate', direction: 'desc' },
      ],
    },
  ],
}) 