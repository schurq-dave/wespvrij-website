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
      {/* Rest of the component code... */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">WESPVRIJ Website</h1>
        <p className="text-xl text-gray-600 mt-4">Professional wasp control services in Noord-Holland</p>
      </div>
    </div>
  )
} 