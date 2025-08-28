import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Shield, Award, Star } from "lucide-react"
import { client } from "../../sanity/lib/client"
import { HOME_PAGE_QUERY } from "../../sanity/lib/queries"
import { urlFor } from "../../sanity/lib/image"

export default async function HomePage() {
  const data = await client.fetch(HOME_PAGE_QUERY)
  const { siteSettings, services, testimonials, homepageContent } = data

  // Fallback data if Sanity is not available
  const fallbackData = {
    siteSettings: {
      companyName: "WESPVRIJ",
      tagline: "Professionele wespenbestrijding in Noord-Holland",
      phoneNumber: "06-53809593",
      email: "info@wespvrij.nl",
      availability: "24/7 beschikbaar",
      guaranteeText: "Seizoensgarantie - komt het probleem terug, dan ook wij terug",
      experienceYears: 15,
      customerCount: "1000+",
      averageRating: 4.9,
      logo: null
    },
    homepageContent: {
      heroTitle: "Wespvrij binnen 24 uur",
      heroSubtitle: "Gegarandeerd resultaat of geld terug.",
      heroImage: null,
      features: [
        { icon: "clock", title: "24/7 Service", description: "Ook in weekenden en feestdagen bereikbaar voor spoedgevallen" },
        { icon: "shield", title: "100% Garantie", description: "Seizoensgarantie - komt het probleem terug, dan ook wij terug" },
        { icon: "award", title: "Gecertificeerd", description: "Volledig verzekerd en gecertificeerd voor veilige behandeling" }
      ],
      problemSectionTitle: "Wat te doen bij een wespenprobleem?",
      problemParagraphs: [
        "Iedere zomer heeft u weer wespenbestrijding nodig. Het wespenprobleem keert steeds terug omdat de nesten uitvliegen. In zo'n wespennest kunnen wel 5000 wespen zitten.",
        "Als u last heeft van meerdere wespennesten, dan is het van essentieel belang dat deze op korte termijn bestreden worden.",
        "Wespenbestrijding is daarom een zorgzame klus. Een klus voor echte vakmannen. Wespvrij.nl behaalt met minimale, niet schadelijke middelen, optimaal resultaat."
      ],
      problemTipTitle: "Belangrijke Tip",
      problemTipText: "Probeer vooral de ingang naar het nest niet dicht te stoppen, de wespen zullen altijd een uitweg vinden. Zo kunnen zij ook op andere plekken in uw huis of bedrijfspand te voorschijn komen.",
      problemImage: null,
      problemStatNumber: "5000",
      problemStatText: "wespen per nest",
      processSectionTitle: "Hoe werkt het?",
      processSectionSubtitle: "Simpel en effectief - van melding tot oplossing in 4 stappen",
      processSteps: [
        { stepNumber: 1, title: "Bel of mail ons", description: "Beschrijf uw probleem en wij plannen direct een afspraak" },
        { stepNumber: 2, title: "Inspectie ter plaatse", description: "Onze expert komt langs voor een grondige inspectie" },
        { stepNumber: 3, title: "Veilige behandeling", description: "Professionele verwijdering met gespecialiseerde uitrusting" },
        { stepNumber: 4, title: "Nazorg & garantie", description: "Controle en seizoensgarantie voor uw gemoedsrust" }
      ],
      processImage: null,
      contactFormTitle: "Gratis Offerte Aanvragen",
      contactFormSubtitle: "Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte",
      contactFormButtonText: "Verstuur Aanvraag",
      ctaTitle: "Klaar om van uw wespenprobleem af te komen?",
      ctaSubtitle: "Bel nu voor een gratis offerte en snelle oplossing. Wij zijn 24/7 bereikbaar."
    },
    services: [
      {
        _id: "fallback-1",
        title: "Wespenbestrijding",
        description: "Professionele verwijdering van wespennesten",
        price: "€89",
        features: ["24/7 beschikbaar", "Seizoensgarantie", "Veilige verwijdering"],
        status: "popular"
      },
      {
        _id: "fallback-2",
        title: "Hoornaarbestrijding", 
        description: "Specialistische behandeling van hoornaren",
        price: "€129",
        features: ["Gespecialiseerde uitrusting", "Ervaren technici", "Volledige verwijdering"],
        status: "active"
      },
      {
        _id: "fallback-3",
        title: "Preventieve behandeling",
        description: "Voorkom wespenkolonies effectief", 
        price: "€59",
        features: ["Seizoensbehandeling", "Natuurlijke middelen", "Jaarlijkse controle"],
        status: "active"
      }
    ],
    testimonials: [
      {
        _id: "fallback-testimonial-1",
        customerName: "Maria van der Berg",
        location: "Amsterdam",
        rating: 5,
        text: "Zeer professionele service! Binnen 2 uur waren ze er en het probleem was opgelost.",
        avatar: null
      },
      {
        _id: "fallback-testimonial-2",
        customerName: "Jan Pietersen",
        location: "Haarlem", 
        rating: 5,
        text: "Uitstekende service, vriendelijke medewerkers en zeer redelijke prijs.",
        avatar: null
      },
      {
        _id: "fallback-testimonial-3",
        customerName: "Sophie de Wit",
        location: "Alkmaar",
        rating: 5,
        text: "Snelle reactie, professionele uitvoering en goede nazorg. Aanrader!",
        avatar: null
      }
    ]
  }

  // Use Sanity data or fallback
  const settings = siteSettings || fallbackData.siteSettings
  const content = homepageContent || fallbackData.homepageContent
  const servicesData = services?.length ? services : fallbackData.services
  const reviewsData = testimonials?.length ? testimonials : fallbackData.testimonials

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'clock': return Clock
      case 'shield': return Shield
      case 'award': return Award
      default: return Clock
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {settings.logo ? (
                <Image
                  src={urlFor(settings.logo as any).width(200).height(80).url()} // eslint-disable-line @typescript-eslint/no-explicit-any
                  alt={`${settings.companyName} Logo`}
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
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#diensten"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Diensten
              </Link>
              <Link
                href="#prijzen"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Prijzen
              </Link>
              <Link
                href="#reviews"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                Reviews
              </Link>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-6" asChild>
                <a href={`tel:${settings.phoneNumber?.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {settings.phoneNumber}
                </a>
              </Button>
            </nav>

            {/* Mobile Phone Button */}
            <div className="md:hidden">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2" asChild>
                <a href={`tel:${settings.phoneNumber?.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Bellen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 border-green-200 text-sm px-3 py-1">
                  {settings.availability}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {content.heroTitle?.split(' ').map((word, index) => 
                    word === '24' || word === 'uur' ? (
                      <span key={index} className="text-green-600">{word} </span>
                    ) : (
                      word + ' '
                    )
                  )}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {settings.tagline}. {content.heroSubtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                  asChild
                >
                  <a href={`tel:${settings.phoneNumber?.replace(/\s/g, '')}`}>
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

              <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{settings.customerCount}</div>
                  <div className="text-xs sm:text-sm text-gray-500">Klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{settings.experienceYears}+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Jaar ervaring</div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{settings.averageRating}/5</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                {content.heroImage ? (
                  <Image
                    src={urlFor(content.heroImage).width(600).height(600).url()}
                    alt="Professional wasp control service - WESPVRIJ expert with specialized equipment"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto lg:max-w-none aspect-square"
                  />
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4233-scaled.jpg-B26rMEyvWmRhwT2kHAhCR1AeOy7kQJ.jpeg"
                    alt="Professional wasp control service - WESPVRIJ expert with specialized equipment"
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

      {/* Features */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {content.features?.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon)
              return (
                <div key={index} className="text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 px-2">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Onze Diensten</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professionele wespenbestrijding met moderne technieken en milieuvriendelijke methoden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {servicesData.map((service, index) => (
              <Card
                key={service._id || index}
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
                  <div className="text-center space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-2">
                    {service.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500">Inclusief BTW</div>
                    </div>
                    <Button className="w-full py-3 text-base font-semibold bg-green-600 hover:bg-green-700 text-white">
                      Boek Nu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Wat Klanten Zeggen</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900">{settings.averageRating}/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviewsData.map((review, index) => (
              <Card key={review._id || index} className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">
                        {review.customerName?.split(' ').map(n => n[0]).join('') || 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{review.customerName || 'Anonymous'}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.contactFormTitle}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                {content.contactFormSubtitle}
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-12">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Naam *</label>
                    <input
                      type="text"
                      className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Telefoon *</label>
                    <input
                      type="tel"
                      className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Beschrijving probleem</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent text-base resize-none"
                      placeholder="Beschrijf uw wespenprobleem in detail..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg">
                      {content.contactFormButtonText}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_wespvrij_500x100px-ZEM7a6VOksBN7iQLtMl6C4EUxclALl.png"
                alt="WESPVRIJ Logo"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {settings.tagline} sinds 2009.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p>📞 {settings.phoneNumber}</p>
                <p>🕒 {settings.availability}</p>
                <p>📧 {settings.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Werkgebied</h4>
              <div className="text-gray-400 text-sm sm:text-base">
                <p>Amsterdam, Haarlem, Alkmaar</p>
                <p>Heel Noord-Holland</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 {settings.companyName}. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 