import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// This data would typically come from a database or API

export const metadata = {
  title: 'Conference Highlight ICSTHM 2025 | International Conference on Sustainable Tourism & Hospitality Management',
  description: 'Discover ICSTHM 2025, a premier global conference bringing together 500+ tourism leaders, featuring 20+ workshops, 50+ speakers from 30+ countries, and innovative solutions for sustainable tourism and hospitality management.',
  keywords: [
    'ICSTHM 2025',
    'sustainable tourism conference',
    'hospitality management conference',
    'tourism innovation',
    'Bangkok conference',
    'tourism sustainability',
    'hospitality research',
    'tourism professionals',
    'tourism workshops',
    'sustainable travel',
    'hospitality innovation',
    'tourism networking'
  ],
  openGraph: {
    title: 'Conference Highlight ICSTHM 2025 | Sustainable Tourism & Hospitality Conference',
    description: 'Join 500+ global leaders at ICSTHM 2025 in Bangkok. Explore sustainable tourism innovations, network with industry experts, and attend 20+ workshops on emerging trends.',
    url: 'https://www.icsthm.com/highlights/',
    siteName: 'ICSTHM 2025',
    images: [
      {
        url: '/og-images/about-conference.jpg', // Add appropriate image
        width: 1200,
        height: 630,
        alt: 'ICSTHM 2025 Conference Overview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: ' ICSTHM 2025 | Sustainable Tourism Conference',
    description: 'Explore the future of sustainable tourism & hospitality at ICSTHM 2025 in Bangkok. Join 500+ leaders, 50+ speakers, and 20+ workshops.',
    images: ['/og-images/about-conference.jpg'],
  },
  alternates: {
    canonical: 'https://www.icsthm.com/highlights'
  },
  // Structured data for the conference
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'International Conference on Sustainable Tourism & Hospitality Management 2025',
      description: 'A premier global conference bringing together thought leaders, industry professionals, researchers, and innovators to explore sustainable tourism and hospitality management.',
      startDate: '2025-04-24',
      endDate: '2025-04-25',
      location: {
        '@type': 'Place',
        name: 'Bangkok',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangkok',
          addressCountry: 'Thailand'
        }
      },
      organizer: {
        '@type': 'Organization',
        name: 'ICSTHM',
        url: 'https://www.icsthm.com'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.icsthm.com/register',
        availability: 'https://schema.org/InStock'
      },
      keywords: [
        'Tourism Conference',
        'Hospitality Management',
        'Sustainable Tourism',
        'Tourism Innovation',
        'Hospitality Research'
      ],
      audience: {
        '@type': 'Audience',
        audienceType: [
          'Tourism Professionals',
          'Hospitality Professionals',
          'Researchers',
          'Academics',
          'Policymakers',
          'Students'
        ]
      }
    })
  }
};
const highlightsData = [
  {
    id: 'sustainable-tourism',
    title: 'Sustainable Tourism Practices',
    description: 'Explore innovative approaches to sustainable tourism and their impact on local communities and environments.',
    image: '/placeholder.svg?height=400&width=600',
    content: `
      <h2>Key Topics:</h2>
      <ul>
        <li>Eco-friendly accommodation and transportation</li>
        <li>Community-based tourism initiatives</li>
        <li>Sustainable wildlife tourism</li>
        <li>Reducing carbon footprint in tourism</li>
      </ul>
      <h2>Speakers:</h2>
      <ul>
        <li>Dr. Jane Smith - Environmental Scientist</li>
        <li>Mr. John Doe - Sustainable Tourism Consultant</li>
      </ul>
      <p>Join us for in-depth discussions on how the tourism industry can adopt more sustainable practices to protect our planet while providing unforgettable experiences for travelers.</p>
    `,
  },
  {
    id: 'digital-hospitality',
    title: 'Digital Transformation in Hospitality',
    description: 'Discover how technology is reshaping the hospitality industry and enhancing guest experiences.',
    image: '/placeholder.svg?height=400&width=600',
    content: `
      <h2>Key Topics:</h2>
      <ul>
        <li>AI-powered customer service</li>
        <li>IoT in hotel room management</li>
        <li>Blockchain for secure transactions</li>
        <li>Virtual and augmented reality in tourism</li>
      </ul>
      <h2>Speakers:</h2>
      <ul>
        <li>Ms. Sarah Johnson - Chief Digital Officer, Global Hotel Chain</li>
        <li>Mr. Mike Chen - Tech Entrepreneur</li>
      </ul>
      <p>Explore the cutting-edge technologies that are revolutionizing the hospitality industry and learn how to implement these solutions in your own business.</p>
    `,
  },
  {
    id: 'cultural-tourism',
    title: 'Cultural Tourism and Heritage Management',
    description: 'Learn about strategies for preserving cultural heritage while promoting tourism development.',
    image: '/placeholder.svg?height=400&width=600',
    content: `
      <h2>Key Topics:</h2>
      <ul>
        <li>Balancing preservation and accessibility</li>
        <li>Interpreting cultural sites for diverse audiences</li>
        <li>Engaging local communities in heritage tourism</li>
        <li>Digital technologies for heritage interpretation</li>
      </ul>
      <h2>Speakers:</h2>
      <ul>
        <li>Prof. Maria Garcia - Cultural Heritage Expert</li>
        <li>Mr. Ahmed Hassan - UNESCO World Heritage Site Manager</li>
      </ul>
      <p>Discover best practices for managing cultural tourism sites and creating meaningful experiences that respect and celebrate local heritage.</p>
    `,
  },
]

export default function HighlightPage({ params }) {
  const highlight = highlightsData.find(h => h.id === params.id)

  if (!highlight) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={highlight.image}
            alt={highlight.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">{highlight.title}</CardTitle>
          <CardDescription className="text-xl text-muted-foreground">{highlight.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: highlight.content }} />
        </CardContent>
      </Card>
    </div>
  )
}