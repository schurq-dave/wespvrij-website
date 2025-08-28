export interface LocationData {
  name: string
  slug: string
  region: string
  population: string
  description: string
  localKeywords: string[]
  nearbyAreas: string[]
  serviceHighlights: string[]
  localInfo: string
  testimonial: {
    name: string
    text: string
    area: string
  }
}

export const locations: LocationData[] = [
  {
    name: "Alkmaar",
    slug: "alkmaar",
    region: "Noord-Holland",
    population: "109.000",
    description: "Specialist in wespenbestrijding Alkmaar.",
    localKeywords: [
      "wespenbestrijding alkmaar",
      "wespen alkmaar",
      "wespennest alkmaar",
      "ongediertebestrijding alkmaar",
    ],
    nearbyAreas: ["Bergen", "Heiloo", "Castricum", "Heerhugowaard", "Langedijk"],
    serviceHighlights: [
      "Lokale kennis van Alkmaar en omgeving sinds 2009",
      "Snelle responstijd binnen Alkmaar centrum en buitenwijken",
      "Ervaring met historische panden in Alkmaar binnenstad",
      "24/7 bereikbaar voor spoedgevallen in Alkmaar",
      "Vaste tarieven zonder verrassingen voor Alkmaar klanten",
    ],
    localInfo:
      "Als kaasstad van Nederland heeft Alkmaar veel historische panden waar wespen graag nestelen. Onze ervaren technici kennen de specifieke uitdagingen van wespenbestrijding in Alkmaar, van de binnenstad tot de nieuwbouwwijken zoals Overdie en De Mare.",
    testimonial: {
      name: "Petra van der Meer",
      text: "Binnen een uur na mijn telefoontje was WESPVRIJ er al. Zeer professioneel en het wespennest in onze dakgoot was vakkundig verwijderd. Echt een aanrader voor Alkmaar!",
      area: "Alkmaar Centrum",
    },
  },
  {
    name: "Purmerend",
    slug: "purmerend",
    region: "Noord-Holland",
    population: "81.000",
    description: "Betrouwbare wespenbestrijding Purmerend.",
    localKeywords: [
      "wespenbestrijding purmerend",
      "wespen purmerend",
      "wespennest purmerend",
      "ongediertebestrijding purmerend",
    ],
    nearbyAreas: ["Volendam", "Edam", "Monnickendam", "Waterland", "Beemster"],
    serviceHighlights: [
      "Uitgebreide ervaring in Purmerend en Waterland gebied",
      "Kennis van lokale bouwstijlen en veelvoorkomende nestlocaties",
      "Snelle service naar alle wijken van Purmerend",
      "Specialistische aanpak voor boerderijen in buitengebied",
      "Preventieve adviezen specifiek voor Purmerend klimaat",
    ],
    localInfo:
      "Purmerend, gelegen in het prachtige Waterland, heeft door zijn ligging nabij water en groen veel wespenactiviteit. Onze specialisten kennen de lokale omstandigheden en weten precies waar wespen zich graag vestigen in deze regio.",
    testimonial: {
      name: "Jan Bakker",
      text: "Fantastische service! Het wespennest onder onze dakpannen was lastig bereikbaar, maar de monteur van WESPVRIJ loste het vakkundig op. Purmerend kan trots zijn op dit bedrijf.",
      area: "Purmerend Noord",
    },
  },
  {
    name: "Heerhugowaard",
    slug: "heerhugowaard",
    region: "Noord-Holland",
    population: "57.000",
    description: "Professionele wespenbestrijding Heerhugowaard.",
    localKeywords: [
      "wespenbestrijding heerhugowaard",
      "wespen heerhugowaard",
      "wespennest heerhugowaard",
      "ongediertebestrijding heerhugowaard",
    ],
    nearbyAreas: ["Alkmaar", "Langedijk", "Schagen", "Bergen", "Heiloo"],
    serviceHighlights: [
      "Gespecialiseerd in nieuwbouwwijken van Heerhugowaard",
      "Ervaring met moderne woningbouw en isolatiematerialen",
      "Snelle bereikbaarheid vanuit centraal Noord-Holland",
      "Kennis van lokale wespensoorten in het gebied",
      "Samenwerking met lokale bouwbedrijven voor preventie",
    ],
    localInfo:
      "Heerhugowaard is een moderne stad met veel nieuwbouwwijken. Door de specifieke bouwmaterialen en isolatietechnieken zien we hier vaak wespen in spouwmuren en onder dakbedekking. Onze technici zijn gespecialiseerd in deze moderne uitdagingen.",
    testimonial: {
      name: "Sandra Visser",
      text: "Zeer tevreden met de snelle en professionele service. Het wespennest in onze spouwmuur was binnen no-time vakkundig verwijderd. Heerhugowaard heeft een goede partner aan WESPVRIJ!",
      area: "Heerhugowaard Centrum",
    },
  },
  {
    name: "Haarlem",
    slug: "haarlem",
    region: "Noord-Holland",
    population: "162.000",
    description: "Ervaren wespenbestrijding Haarlem.",
    localKeywords: [
      "wespenbestrijding haarlem",
      "wespen haarlem",
      "wespennest haarlem",
      "ongediertebestrijding haarlem",
    ],
    nearbyAreas: ["Bloemendaal", "Heemstede", "Zandvoort", "Hoofddorp", "Spaarndam"],
    serviceHighlights: [
      "Ruime ervaring met monumentale panden in Haarlem centrum",
      "Specialistische kennis van historische bouwmethoden",
      "Discrete service voor bedrijven in Haarlem binnenstad",
      "24/7 spoedservice voor horeca en winkels",
      "Milieuvriendelijke methoden geschikt voor dichtbebouwd gebied",
    ],
    localInfo:
      "Haarlem, met zijn rijke geschiedenis en prachtige architectuur, vraagt om een specialistische aanpak bij wespenbestrijding. Van de Grote Kerk tot de moderne wijken, wij kennen elke uithoek van deze mooie stad en weten hoe we wespen veilig kunnen bestrijden zonder schade aan het erfgoed.",
    testimonial: {
      name: "Robert de Jong",
      text: "Uitstekende service in ons monumentale pand aan de Grote Markt. WESPVRIJ werkte zeer zorgvuldig en respectvol met ons historische gebouw. Een echte aanrader voor Haarlem!",
      area: "Haarlem Centrum",
    },
  },
  {
    name: "Zaanstad",
    slug: "zaanstad",
    region: "Noord-Holland",
    population: "156.000",
    description: "Deskundige wespenbestrijding Zaanstad.",
    localKeywords: [
      "wespenbestrijding zaanstad",
      "wespen zaanstad",
      "wespennest zaanstad",
      "ongediertebestrijding zaanstad",
    ],
    nearbyAreas: ["Zaandam", "Koog aan de Zaan", "Wormerveer", "Krommenie", "Assendelft"],
    serviceHighlights: [
      "Ervaring met industriële complexen in Zaanstad",
      "Kennis van historische Zaanse architectuur",
      "Service voor bedrijven en particulieren",
      "Snelle responstijd door lokale aanwezigheid",
      "Preventieve programma's voor bedrijfsterreinen",
    ],
    localInfo:
      "Zaanstad, bekend om zijn industriële erfgoed en karakteristieke groene houten huizen, biedt wespen veel nestelmogelijkheden. Onze ervaren technici kennen zowel de historische Zaanse bouwstijl als de moderne industriële complexen in dit gebied.",
    testimonial: {
      name: "Maria Jansen",
      text: "Zeer professionele aanpak bij ons wespennest in de dakconstructie. De monteur kende de Zaanse bouwstijl goed en werkte zeer zorgvuldig. Zaanstad kan trots zijn op WESPVRIJ!",
      area: "Zaanstad West",
    },
  },
  {
    name: "Zaandam",
    slug: "zaandam",
    region: "Noord-Holland",
    population: "76.000",
    description: "Specialistische wespenbestrijding Zaandam.",
    localKeywords: [
      "wespenbestrijding zaandam",
      "wespen zaandam",
      "wespennest zaandam",
      "ongediertebestrijding zaandam",
    ],
    nearbyAreas: ["Zaanstad", "Koog aan de Zaan", "Wormerveer", "Amsterdam Noord", "Purmerend"],
    serviceHighlights: [
      "Gespecialiseerd in Zaanse houten architectuur",
      "Ervaring met monumentale panden in Zaandam centrum",
      "Kennis van moderne woonwijken en appartementen",
      "Discrete service voor winkelcentrum De Saen",
      "24/7 bereikbaar voor spoedgevallen",
    ],
    localInfo:
      "Zaandam, het hart van de Zaanstreek, combineert historische charme met moderne voorzieningen. De karakteristieke groene houten huizen en moderne nieuwbouw vragen elk om een eigen aanpak bij wespenbestrijding. Onze specialisten kennen beide uitstekend.",
    testimonial: {
      name: "Kees van der Berg",
      text: "Fantastische service! Het wespennest in ons historische Zaanse huis werd vakkundig verwijderd zonder schade. WESPVRIJ begrijpt de waarde van ons erfgoed. Zeer tevreden!",
      area: "Zaandam Centrum",
    },
  },
  {
    name: "Schoorl",
    slug: "schoorl",
    region: "Noord-Holland",
    population: "8.000",
    description: "Lokale wespenbestrijding Schoorl.",
    localKeywords: [
      "wespenbestrijding schoorl",
      "wespen schoorl",
      "wespennest schoorl",
      "ongediertebestrijding schoorl",
    ],
    nearbyAreas: ["Bergen", "Alkmaar", "Camperduin", "Groet", "Heiloo"],
    serviceHighlights: [
      "Kennis van natuurgebied en duinlandschap rondom Schoorl",
      "Ervaring met vakantiehuizen en recreatieparken",
      "Specialistische aanpak voor boerderijen en landgoederen",
      "Milieuvriendelijke methoden geschikt voor natuurgebied",
      "Persoonlijke service in kleine gemeenschap",
    ],
    localInfo:
      "Schoorl, gelegen tussen de duinen en het bos, is een unieke omgeving waar wespen zich graag vestigen. Door de nabijheid van natuurgebieden en de vele vakantieverblijven vraagt wespenbestrijding hier om een speciale aanpak die rekening houdt met de natuurlijke omgeving.",
    testimonial: {
      name: "Anneke Mol",
      text: "Zeer tevreden met de zorgvuldige aanpak. Het wespennest bij ons vakantiehuis werd professioneel verwijderd met respect voor de natuur. Perfect voor Schoorl!",
      area: "Schoorl Dorp",
    },
  },
  {
    name: "Bergen",
    slug: "bergen",
    region: "Noord-Holland",
    population: "29.000",
    description: "Betrouwbare wespenbestrijding Bergen NH.",
    localKeywords: [
      "wespenbestrijding bergen",
      "wespen bergen nh",
      "wespennest bergen",
      "ongediertebestrijding bergen",
    ],
    nearbyAreas: ["Alkmaar", "Schoorl", "Heiloo", "Castricum", "Egmond"],
    serviceHighlights: [
      "Ervaring met villa's en landhuizen in Bergen",
      "Kennis van kunstenaarsdorp en monumentale panden",
      "Service voor vakantieverblijven en tweede woningen",
      "Discrete aanpak voor exclusieve woonwijken",
      "Preventieve adviezen voor seizoensbewoning",
    ],
    localInfo:
      "Bergen, bekend als kunstenaarsdorp met prachtige villa's en landhuizen, vraagt om een verfijnde aanpak bij wespenbestrijding. Onze ervaren technici begrijpen de waarde van deze bijzondere woningen en werken altijd met de grootste zorgvuldigheid.",
    testimonial: {
      name: "Elisabeth van Houten",
      text: "Uitstekende service bij onze villa. De monteur werkte zeer discreet en professioneel. Het wespennest werd vakkundig verwijderd zonder enige schade. Bergen kan trots zijn op WESPVRIJ!",
      area: "Bergen Dorp",
    },
  },
]
