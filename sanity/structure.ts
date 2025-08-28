// import type { StructureResolver } from 'sanity/structure'
// import { CogIcon, WrenchIcon, PinIcon, UserIcon, EnvelopeIcon, HomeIcon } from '@sanity/icons'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('WESPVRIJ Content')
//     .items([
//       // Site Settings (singleton)
//       S.listItem()
//         .title('Site Settings')
//         .icon(CogIcon)
//         .child(
//           S.document()
//             .schemaType('siteSettings')
//             .documentId('siteSettings')
//         ),
        
//       // Homepage Content (singleton)
//       S.listItem()
//         .title('Homepage Content')
//         .icon(HomeIcon)
//         .child(
//           S.document()
//             .schemaType('homepageContent')
//             .documentId('homepageContent')
//         ),
        
//       S.divider(),
      
//       // Services
//       S.listItem()
//         .title('Services')
//         .icon(WrenchIcon)
//         .child(
//           S.documentTypeList('service')
//             .title('Services')
//             .defaultOrdering([{field: 'order', direction: 'asc'}])
//         ),
      
//       // Locations
//       S.listItem()
//         .title('Locations')
//         .icon(PinIcon)
//         .child(
//           S.documentTypeList('location')
//             .title('Locations')
//             .defaultOrdering([{field: 'priority', direction: 'asc'}])
//         ),
        
//       // Testimonials
//       S.listItem()
//         .title('Testimonials')
//         .icon(UserIcon)
//         .child(
//           S.documentTypeList('testimonial')
//             .title('Testimonials')
//             .defaultOrdering([
//               {field: 'featured', direction: 'desc'},
//               {field: 'rating', direction: 'desc'},
//               {field: 'dateReceived', direction: 'desc'}
//             ])
//         ),
        
//       S.divider(),
      
//       // Contact Submissions
//       S.listItem()
//         .title('Contact Submissions')
//         .icon(EnvelopeIcon)
//         .child(
//           S.documentTypeList('contactSubmission')
//             .title('Contact Submissions')
//             .defaultOrdering([{field: 'submissionDate', direction: 'desc'}])
//             .filter('_type == "contactSubmission"')
//         ),
        
//       // All remaining document types (if any)
//       ...S.documentTypeListItems().filter(
//         (listItem) => !['siteSettings', 'homepageContent', 'service', 'location', 'testimonial', 'contactSubmission'].includes(listItem.getId()!)
//       ),
//     ])

export const structure: any = null
