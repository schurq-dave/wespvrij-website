import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { client } from '../../../sanity/lib/client'
import { LOCATION_QUERY, LOCATION_SLUGS_QUERY } from '../../../sanity/lib/queries'
import LocationPage from '@/components/location-page'

interface LocationPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all location pages
export async function generateStaticParams() {
  const locations = await client.fetch(LOCATION_SLUGS_QUERY)
  
  return locations
    .filter((location: { slug: string | null }) => location.slug !== null)
    .map((location) => ({
      slug: location.slug as string,
    }))
}

// Generate metadata for each location page
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = await client.fetch(LOCATION_QUERY, { slug })
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: location.metaTitle || `Wespenbestrijding ${location.name} | WESPVRIJ`,
    description: location.metaDescription || `Professionele wespenbestrijding in ${location.name}. ${location.description}`,
  }
}

export default async function Page({ params }: LocationPageProps) {
  const { slug } = await params
  const location = await client.fetch(LOCATION_QUERY, { slug })

  if (!location) {
    notFound()
  }

  return <LocationPage location={location} />
} 