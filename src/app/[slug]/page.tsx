import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { client } from '../../../sanity/lib/client'
import { LOCATION_QUERY, LOCATION_SLUGS_QUERY } from '../../../sanity/lib/queries'
import LocationPage from '@/components/location-page'

interface LocationPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all location pages
export async function generateStaticParams() {
  const locations = await client.fetch(LOCATION_SLUGS_QUERY)
  
  return locations.map((location: { slug: string }) => ({
    slug: location.slug,
  }))
}

// Generate metadata for each location page
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = await client.fetch(LOCATION_QUERY, { slug: params.slug })
  
  if (!location) {
    return {
      title: 'Locatie niet gevonden | WESPVRIJ',
      description: 'De opgevraagde locatie pagina kon niet worden gevonden.',
    }
  }

  const title = location.metaTitle || `Wespenbestrijding ${location.name} | WESPVRIJ | 24/7 Service | €89`
  const description = location.metaDescription || 
    `Professionele wespenbestrijding in ${location.name}. ✓ 24/7 bereikbaar ✓ Binnen 24 uur ter plaatse ✓ Seizoensgarantie ✓ Vanaf €89. Bel 06-53809593 voor directe hulp!`

  return {
    title,
    description,
    keywords: location.localKeywords?.join(', '),
    openGraph: {
      title,
      description,
      url: `https://wespvrij.nl/${location.slug.current}`,
      siteName: 'WESPVRIJ',
      locale: 'nl_NL',
      type: 'website',
    },
  }
}

export default async function DynamicLocationPage({ params }: LocationPageProps) {
  const location = await client.fetch(LOCATION_QUERY, { slug: params.slug })
  
  if (!location) {
    notFound()
  }

  return <LocationPage location={location} />
} 