import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Users, DollarSign, Award } from 'lucide-react'
import { SponsorshipPackages } from "./components/SponsorshipPackages"
import Link from "next/link"


export const metadata = {
  title: 'Sponsorship ICSTHM 2025 ',
  description: 'Join 500+ tourism leaders at ICSTHM 2025. Experience 20+ workshops & 50+ speakers from 30+ countries exploring sustainable tourism solutions.',
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
    title: 'Sponsorship ICSTHM 2025 | Sustainable Tourism & Hospitality Conference',
    description: 'Join 500+ global leaders at ICSTHM 2025 in Bangkok. Explore sustainable tourism innovations, network with industry experts, and attend 20+ workshops on emerging trends.',
    url: 'https://www.icsthm.com/sponsorship',
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
    title: 'About ICSTHM 2025 | Sustainable Tourism Conference',
    description: 'Explore the future of sustainable tourism & hospitality at ICSTHM 2025 in Bangkok. Join 500+ leaders, 50+ speakers, and 20+ workshops.',
    images: ['/og-images/about-conference.jpg'],
  },
  alternates: {
    canonical: 'https://www.icsthm.com/sponsorship'
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
export default function SponsorshipContact() {
  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">   
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198715/samples/szapxx5bakzspvbxz3gj.webp"
              alt="Conference sponsorship"
              layout="fill"
              objectFit="cover"
              className=" rounded-2xl drop-shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-500">
                  Become a Sponsor
                </span>
              </h1>
              <p className="text-lg text-gray-700">
                Join us in shaping the future of Tourism Management and Hospitality. Explore our sponsorship opportunities and connect with industry leaders.
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-orange-500">Why Sponsor?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 flex-shrink-0 text-orange-800" />
                  <span>Connect with 500+ industry professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 flex-shrink-0 text-orange-800" />
                  <span>Showcase your products and services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 flex-shrink-0 text-orange-800" />
                  <span>Gain recognition as an industry leader</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-500">Contact Our Sponsorship Team</h2>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-700" />
                <span>+91 7358737843</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-700" />
                <span>info@icsthm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-orange-700" />
                <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-500">
              Sponsorship Packages
            </span>
          </h2>
          <SponsorshipPackages />
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h3>
          <p className="text-xl text-white mb-6">
            Don&apos;t miss this opportunity to showcase your brand at the International Conference on Sustainable Tourism and Hospitality Management.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
        <Link href={'/contact'}>  Request Sponsorship Package</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

