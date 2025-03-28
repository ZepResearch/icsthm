import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



export const metadata = {
  title: 'Terms & Conditions ICSTHM 2025',
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
    title: 'Terms & onditions ICSTHM 2025 ',
    description: 'Join 500+ global leaders at ICSTHM 2025 in Bangkok. Explore sustainable tourism innovations, network with industry experts, and attend 20+ workshops on emerging trends.',
    url: 'https://www.icsthm.com/Terms-and-Conditions',
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
    canonical: 'https://www.icsthm.com/terms-and-conditions '
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
export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By registering for the International Conference on Tourism Management and Hospitality, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not register for or attend the conference."
    },
    {
      title: "2. Registration and Payment",
      content: "Registration is only confirmed upon receipt of full payment. All fees must be paid in the currency specified on the registration form. The organizers reserve the right to refuse admission if payment is not received prior to the conference."
    },
    {
      title: "3. Cancellation and Refund Policy",
      content: "Cancellations must be received in writing. Refunds will be issued as follows: 100% refund for cancellations more than 60 days before the conference, 50% refund for cancellations 30-60 days before the conference, and no refund for cancellations less than 30 days before the conference."
    },
    {
      title: "4. Conference Program",
      content: "The organizers reserve the right to modify the program and speakers without prior notice. In the event of a speaker cancellation, the organizers will make every effort to find a suitable replacement."
    },
    {
      title: "5. Intellectual Property",
      content: "All materials presented at the conference are protected by copyright. Attendees may not record, photograph, or reproduce any sessions without the express written consent of the organizers and the respective speakers."
    },
    {
      title: "6. Liability",
      content: "The organizers are not responsible for any loss, injury, or damage to any person or property, whatever the cause may be. Attendees are advised to make their own arrangements with respect to personal insurance, travel, and accommodation."
    },
    {
      title: "7. Code of Conduct",
      content: "All attendees are expected to behave in a professional and respectful manner throughout the conference. The organizers reserve the right to remove any attendee from the conference without refund if their behavior is deemed inappropriate or disruptive."
    },
    {
      title: "8. Data Protection",
      content: "By registering for the conference, you agree that your personal information may be used for conference administration purposes. We will not share your information with third parties without your consent, except as required by law."
    },
    {
      title: "9. Force Majeure",
      content: "In the event that the conference is postponed or cancelled due to circumstances beyond the organizers' control, including but not limited to acts of God, war, disaster, or government regulations, the organizers will not be held liable for any damages or losses incurred by attendees."
    },
    {
      title: "10. Amendments",
      content: "The organizers reserve the right to amend these Terms and Conditions at any time without prior notice. The most current version will always be available on the conference website."
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold underline underline-offset-4 decoration-orange-500 mb-8 text-center">Terms and Conditions</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-orange-900 mb-4">
            Welcome to the Terms and Conditions for the International Conference on Tourism Management and Hospitality. 
            Please read these terms carefully before registering for the conference.
          </h2>
          <ScrollArea className="h-[60vh] rounded-md border border-orange-200 p-4">
            <Accordion type="single" collapsible className="w-full">
              {sections.map((section, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-orange-600">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </div>
        <div className="text-center ">
          <p>Last updated: <span className="font-semibold text-orange-600">{new Date().toLocaleDateString()}</span> </p>
          <p>For any questions regarding these Terms and Conditions, please contact us at <a className="font-semibold text-orange-600" href="mailto:icthm@icthm.com">icthm@contact.com</a></p>
        </div>
      </div>
    </div>
  )
}