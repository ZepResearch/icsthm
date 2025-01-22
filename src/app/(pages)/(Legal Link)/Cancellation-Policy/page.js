import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"



export const metadata = {
  title: 'Cancellation Policy ICSTHM 2025',
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
    title: 'CancellationPolicy ICSTHM 2025 | Sustainable Tourism & Hospitality Conference',
    description: 'Join 500+ global leaders at ICSTHM 2025 in Bangkok. Explore sustainable tourism innovations, network with industry experts, and attend 20+ workshops on emerging trends.',
    url: 'https://www.icsthm.com/Cancellation-Policy',
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
    canonical: 'https://www.icsthm.com/Cancellation-Policy'
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

export default function CancellationPolicy() {
  const cancellationFees = [
    { period: "60+ days before the conference", refund: "100% refund" },
    { period: "30-59 days before the conference", refund: "50% refund" },
    { period: "Less than 30 days before the conference", refund: "No refund" },
  ]

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold underline underline-offset-4 decoration-orange-500 mb-8 text-center">Cancellation Policy</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">Overview</CardTitle>
          </CardHeader>
          <CardContent className="">
            <p>
              We understand that plans can change. Our cancellation policy is designed to be fair to all parties involved. 
              Please read this policy carefully before registering for the International Conference on Tourism Management and Hospitality.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">Cancellation Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="underline underline-offset-4 decoration-orange-500 font-extrabold">Cancellation Period</TableHead>
                  <TableHead className="underline underline-offset-4 decoration-orange-500 font-extrabold">Refund Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cancellationFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold ">{fee.period}</TableCell>
                    <TableCell className="">{fee.refund}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl underline underline-offset-4 decoration-orange-500 font-extrabold">How to Cancel</CardTitle>
          </CardHeader>
          <CardContent className="">
            <p>To cancel your registration, please follow these steps:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ">
              <li>Log in to your conference account</li>
              <li>Navigate to My Registrations</li>
              <li>Select the registration you wish to cancel</li>
              <li>Click on the Cancel Registration button</li>
              <li>Follow the prompts to complete the cancellation process</li>
            </ol>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <InfoIcon className="h-5 w-5 " />
          <AlertTitle className='font-extrabold underline underline-offset-4 decoration-orange-500 mb-4 mt-1.5'>Important Note</AlertTitle>
          <AlertDescription>
            All cancellation requests must be submitted through your conference account. Refunds will be processed to the original form of payment within 10 business days of approval.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="">
            <p>
              If you have any questions about our cancellation policy or need assistance, please dont hesitate to contact our support team:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@icsthm.com<br />
             <strong> Phone:</strong> +91 7358737843
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}