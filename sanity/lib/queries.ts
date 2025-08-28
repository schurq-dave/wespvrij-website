import { defineQuery } from 'groq'

// Site Settings Query
export const SITE_SETTINGS_QUERY = defineQuery(`*[
  _type == "siteSettings"
][0]{
  _id,
  companyName,
  tagline,
  phoneNumber,
  email,
  serviceArea,
  availability,
  guaranteeText,
  experienceYears,
  customerCount,
  averageRating,
  defaultMetaTitle,
  defaultMetaDescription,
  logo,
  socialMediaLinks
}`)

// Homepage Content Query
export const HOMEPAGE_CONTENT_QUERY = defineQuery(`*[
  _type == "homepageContent"
][0]{
  _id,
  heroTitle,
  heroSubtitle,
  heroImage,
  features[]{
    icon,
    title,
    description
  },
  problemSectionTitle,
  problemParagraphs,
  problemTipTitle,
  problemTipText,
  problemImage,
  problemStatNumber,
  problemStatText,
  processSectionTitle,
  processSectionSubtitle,
  processSteps[]{
    stepNumber,
    title,
    description
  },
  processImage,
  contactFormTitle,
  contactFormSubtitle,
  contactFormButtonText,
  ctaTitle,
  ctaSubtitle
}`)

// Services Query
export const SERVICES_QUERY = defineQuery(`*[
  _type == "service"
  && status != "inactive"
] | order(order asc) {
  _id,
  title,
  slug,
  description,
  price,
  features,
  status,
  order
}`)

// Featured Testimonials Query
export const FEATURED_TESTIMONIALS_QUERY = defineQuery(`*[
  _type == "testimonial"
  && rating >= 4
] | order(featured desc, rating desc, dateReceived desc) [0...3] {
  _id,
  customerName,
  location,
  text,
  rating,
  serviceType,
  featured,
  avatar
}`)

// All Testimonials Query
export const ALL_TESTIMONIALS_QUERY = defineQuery(`*[
  _type == "testimonial"
] | order(featured desc, rating desc, dateReceived desc) {
  _id,
  customerName,
  location,
  text,
  rating,
  serviceType,
  featured,
  dateReceived,
  avatar
}`)

// Locations Query
export const LOCATIONS_QUERY = defineQuery(`*[
  _type == "location"
] | order(priority asc) {
  _id,
  name,
  slug,
  region,
  population,
  description,
  priority
}`)

// Single Location Query
export const LOCATION_QUERY = defineQuery(`*[
  _type == "location"
  && slug.current == $slug
][0]{
  _id,
  name,
  slug,
  region,
  population,
  description,
  localInfo,
  serviceHighlights,
  nearbyAreas,
  localKeywords,
  metaTitle,
  metaDescription,
  featuredImage,
  testimonials[]->{
    _id,
    customerName,
    location,
    text,
    rating,
    avatar
  }
}`)

// Location Slugs Query (for static generation)
export const LOCATION_SLUGS_QUERY = defineQuery(`*[
  _type == "location"
  && defined(slug.current)
]{
  "slug": slug.current
}`)

// Home Page Data Query
export const HOME_PAGE_QUERY = defineQuery(`{
  "siteSettings": *[_type == "siteSettings"][0]{
    companyName,
    tagline,
    phoneNumber,
    email,
    availability,
    guaranteeText,
    experienceYears,
    customerCount,
    averageRating,
    logo
  },
  "homepageContent": *[_type == "homepageContent"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    features[]{
      icon,
      title,
      description
    },
    problemSectionTitle,
    problemParagraphs,
    problemTipTitle,
    problemTipText,
    problemImage,
    problemStatNumber,
    problemStatText,
    processSectionTitle,
    processSectionSubtitle,
    processSteps[]{
      stepNumber,
      title,
      description
    },
    processImage,
    contactFormTitle,
    contactFormSubtitle,
    contactFormButtonText,
    ctaTitle,
    ctaSubtitle
  },
  "services": *[
    _type == "service"
    && status != "inactive"
  ] | order(order asc) {
    _id,
    title,
    slug,
    description,
    price,
    features,
    status
  },
  "testimonials": *[
    _type == "testimonial"
    && rating >= 4
  ] | order(featured desc, rating desc, dateReceived desc) [0...3] {
    _id,
    customerName,
    location,
    text,
    rating,
    avatar
  }
}`)

// Contact Submissions Query (for admin)
export const CONTACT_SUBMISSIONS_QUERY = defineQuery(`*[
  _type == "contactSubmission"
] | order(submissionDate desc) {
  _id,
  name,
  phone,
  email,
  location,
  problemDescription,
  urgency,
  status,
  submissionDate,
  assignedTo
}`) 