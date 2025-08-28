"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, Award, Star, MapPin, Users, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { client } from "../../sanity/lib/client"
import { SERVICES_QUERY, SITE_SETTINGS_QUERY } from "../../sanity/lib/queries"
import { urlFor } from "../../sanity/lib/image"

interface LocationData {
  _id: string
  name: string
  slug: { current: string }
  region: string
  population: string
  description: string
  localInfo: string
  serviceHighlights: string[]
  nearbyAreas: string[]
  localKeywords?: string[]
  testimonials?: Array<{
    _id: string
    customerName: string
    location: string
    text: string
    rating: number
    avatar?: any
  }>
  featuredImage?: any
}

interface Service {
  _id: string
  title: string
  description: string
  price: string
  features: string[]
  status: string
}

interface SiteSettings {
  companyName: string
  phoneNumber: string
  email: string
  logo?: any
}

interface LocationPageProps {
  location: LocationData
}

export default function LocationPage({ location }: LocationPageProps) {
  const [services, setServices] = useState<Service[]>([])
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    companyName: "WESPVRIJ",
    phoneNumber: "06-53809593", 
    email: "info@wespvrij.nl"
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, settingsData] = await Promise.all([
          client.fetch(SERVICES_QUERY),
          client.fetch(SITE_SETTINGS_QUERY)
        ])
        
        if (servicesData) setServices(servicesData)
        if (settingsData) setSiteSettings(settingsData)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Fallback services if Sanity is not available
        setServices([
          {
            _id: "1",
            title: "Wespenbestrijding",
            description: `Professionele wespenbestrijding in ${location.name}`,
            price: "€89",
            features: ["24/7 beschikbaar", "Seizoensgarantie", "Veilige verwijdering"],
            status: "popular"
          },
          {
            _id: "2", 
            title: "Hoornaarbestrijding",
            description: `Specialistische hoornaarbestrijding ${location.name}`,
            price: "€129",
            features: ["Gespecialiseerde uitrusting", "Ervaren technici", "Volledige verwijdering"],
            status: "active"
          },
          {
            _id: "3",
            title: "Preventieve behandeling", 
            description: `Voorkom wespenkolonies in ${location.name}`,
            price: "€59",
            features: ["Seizoensbehandeling", "Natuurlijke middelen", "Jaarlijkse controle"],
            status: "active"
          }
        ])
      }
    }

    fetchData()
  }, [location.name])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              {siteSettings.logo ? (
                <Image
                  src={urlFor(siteSettings.logo).width(200).height(80).url()}
                  alt={`${siteSettings.companyName} Logo`}
                  width={100}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              ) : (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_wespvrij_500x100px-ZEM7a6VOksBN7iQLtMl6C4EUxclALl.png"
                  alt="WESPVRIJ Logo"
                  width={100}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/#diensten"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Diensten
              </Link>
              <Link
                href="/#prijzen"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Prijzen
              </Link>
              <Link
                href="/#reviews"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Reviews
              </Link>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-6" asChild>
                <a href={`tel:${siteSettings.phoneNumber?.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {siteSettings.phoneNumber}
                </a>
              </Button>
            </nav>

            {/* Mobile Phone Button */}
            <div className="md:hidden">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2" asChild>
                <a href={`tel:${siteSettings.phoneNumber?.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Bellen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 border-green-200 text-sm px-3 py-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {location.region}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wespenbestrijding
                  <span className="text-green-600"> {location.name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {location.description}
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{location.population} inwoners</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>24/7 beschikbaar</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                  asChild
                >
                  <a href={`tel:${siteSettings.phoneNumber?.replace(/\s/g, '')}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Bel Direct
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
                >
                  Gratis Offerte
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                {location.featuredImage ? (
                  <Image
                    src={urlFor(location.featuredImage).width(600).height(500).url()}
                    alt={`Wespenbestrijding ${location.name}`}
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto lg:max-w-none aspect-square"
                  />
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4233-scaled.jpg-B26rMEyvWmRhwT2kHAhCR1AeOy7kQJ.jpeg"
                    alt={`Professional wasp control service in ${location.name}`}
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto lg:max-w-none aspect-square"
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full bg-green-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Waarom kiezen voor WESPVRIJ in {location.name}?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {location.localInfo}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {location.serviceHighlights?.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for this location */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Onze Diensten in {location.name}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professionele wespenbestrijding aangepast aan de lokale omstandigheden van {location.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service._id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
                  service.status === 'popular' ? "ring-2 ring-green-500 ring-opacity-50" : ""
                }`}
              >
                {service.status === 'popular' && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                    POPULAIR
                  </div>
                )}

                <CardContent className="p-6 sm:p-8 space-y-6">
                  {/* Service Icon */}
                  <div className="flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        index === 0 ? "bg-green-100" : index === 1 ? "bg-orange-100" : "bg-blue-100"
                      }`}
                    >
                      {index === 0 && <Shield className="w-8 h-8 text-green-600" />}
                      {index === 1 && <Award className="w-8 h-8 text-orange-600" />}
                      {index === 2 && <Clock className="w-8 h-8 text-blue-600" />}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description.includes(location.name) 
                        ? service.description 
                        : `${service.description} in ${location.name}`}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          index === 0 ? "bg-green-600" : index === 1 ? "bg-orange-600" : "bg-blue-600"
                        }`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t pt-6 space-y-4">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500">Inclusief BTW</div>
                    </div>
                    <Button
                      className={`w-full py-3 text-base font-semibold transition-all duration-200 ${
                        service.status === 'popular'
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-600"
                      }`}
                    >
                      {service.status === 'popular' ? "Boek Nu" : "Meer Info"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      {location.testimonials && location.testimonials.length > 0 && (
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Wat klanten in {location.name} zeggen
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {location.testimonials.map((testimonial) => (
                <Card key={testimonial._id} className="border-0 shadow-lg">
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {testimonial.avatar ? (
                        <Image
                          src={urlFor(testimonial.avatar).width(48).height(48).url()}
                          alt={testimonial.customerName}
                          width={40}
                          height={40}
                          className="rounded-full sm:w-12 sm:h-12"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">
                            {testimonial.customerName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.customerName}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      {location.nearbyAreas && location.nearbyAreas.length > 0 && (
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Ook service in de omgeving van {location.name}
              </h2>
              <p className="text-lg text-gray-600">
                Wij bedienen ook de volgende gebieden rondom {location.name}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {location.nearbyAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Wespenprobleem in {location.name}?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 px-4">
              Bel nu voor snelle hulp in {location.name} en omgeving. Wij zijn 24/7 bereikbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                asChild
              >
                <a href={`tel:${siteSettings.phoneNumber?.replace(/\s/g, '')}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {siteSettings.phoneNumber}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
              >
                Gratis Offerte
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              {siteSettings.logo ? (
                <Image
                  src={urlFor(siteSettings.logo).width(240).height(96).url()}
                  alt={`${siteSettings.companyName} Logo`}
                  width={120}
                  height={48}
                  className="h-10 sm:h-12 w-auto brightness-0 invert mx-auto"
                />
              ) : (
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_wespvrij_500x100px-ZEM7a6VOksBN7iQLtMl6C4EUxclALl.png"
                  alt="WESPVRIJ Logo"
                  width={120}
                  height={48}
                  className="h-10 sm:h-12 w-auto brightness-0 invert mx-auto"
                />
              )}
            </Link>
            <p className="text-gray-400 mb-4">
              Professionele wespenbestrijding in {location.name} en heel Noord-Holland
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>📞 {siteSettings.phoneNumber}</span>
              <span>📧 {siteSettings.email}</span>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 {siteSettings.companyName}. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
