'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award, Check, UserCircle } from 'lucide-react'

export const metadata = {
  title: 'About ICSTHM 2025 | International Conference on Sustainable Tourism & Hospitality Management',
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
    title: 'About ICSTHM 2025 | Sustainable Tourism & Hospitality Conference',
    description: 'Join 500+ global leaders at ICSTHM 2025 in Bangkok. Explore sustainable tourism innovations, network with industry experts, and attend 20+ workshops on emerging trends.',
    url: 'https://www.icsthm.com/about',
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
    canonical: 'https://www.icsthm.com/about'
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
export default function ConferenceAboutSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "2-day thought-provoking event" },
    { icon: MapPin, text: "At the centre of Bangkok, Thailand" },
    { icon: Users, text: "Connect with 500+ leaders in the industry" },
    { icon: Lightbulb, text: "Over 20+ workshops on emerging trends" },
    { icon: Globe, text: "Speakers from more than 30 countries" },
    { icon: Award, text: "Annual Tourism Innovation Awards" },
  ]

  const whyAttendReasons = [
    "Future-Focused Insights: Explore groundbreaking innovations and strategies that address sustainability, resilience, and growth in tourism and hospitality.",
    "Global Thought Leaders: Gain knowledge and inspiration from 50+ renowned speakers who are shaping the future of sustainable tourism and hospitality management.",
    "Networking with Industry Leaders: Connect with 500+ attendees, including industry pioneers, researchers, and innovators.",
    "Cutting-Edge Research: Learn from the latest research, case studies, and innovative solutions that address sustainability and resilience.",
    "Interactive Workshops & Panels: Participate in engaging workshops, panel discussions, and Q&A sessions.",
    "Post-Pandemic Strategies: Discover how the sectors are adapting with new technologies and sustainable practices."
  ]

  const attendeeTypes = [
    {
      title: "Tourism & Hospitality Professionals",
      description: "Stay ahead of industry trends, explore new strategies, and connect with global leaders."
    },
    {
      title: "Researchers & Academics",
      description: "Present your research, gain feedback, and collaborate with experts to advance sustainability."
    },
    {
      title: "Policymakers & Government Officials",
      description: "Discover innovative policies and strategies to support sustainable tourism infrastructure."
    },
    {
      title: "Students & Emerging Scholars",
      description: "Enhance your knowledge, showcase your work, and network with established professionals."
    },
    {
      title: "Entrepreneurs & Innovators",
      description: "Find inspiration, explore new technologies, and connect with potential collaborators."
    },
    {
      title: "Nonprofit Organizations & NGOs",
      description: "Learn about sustainable practices that align with environmental and social responsibility."
    }
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About the Conference</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Sustainable Tourism & Hospitality Management</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting global leaders, innovators, and experts to redefine the future of tourism and hospitality.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">About ICSTHM</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-12 text-justify">
                The International Conference on Sustainable Tourism  and Hospitality Management is a premier global event that brings together thought leaders, industry professionals, researchers, and innovators from around the world. Over three days, participants will explore the latest trends, challenges, and opportunities within the tourism and hospitality sectors, with a focus on sustainability, digital transformation, and the future of travel. This conference serves as a unique platform to exchange ideas, foster collaborations, and drive actionable solutions for the industry&apos;s most pressing issues.
              </p>
              <p className="text-muted-foreground px-12 text-justify mt-2">
                Attendees will have the chance to engage in insightful discussions, attend workshops, and network with key influencers shaping the future of tourism and hospitality. Whether you are a seasoned professional, an academic, or a newcomer to the industry, this conference will provide valuable knowledge and connections that can help you navigate and lead in the evolving landscape of tourism and hospitality.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fostering innovation and collaboration, with a focus on sustainable practices in the tourism and hospitality industry through knowledge sharing, networking, and showcasing the most up-to-date research and technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Conference Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why Attend Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Why Attend ICSTHM 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {whyAttendReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Who Can Attend Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Who Can Attend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {attendeeTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <UserCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Be a part of redefining the future of tourism and hospitality.
              </CardDescription>
              <p className="text-muted-foreground">
                April 24th - 25th, 2025 • Bangkok, Thailand
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}