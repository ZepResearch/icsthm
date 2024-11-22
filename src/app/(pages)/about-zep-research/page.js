'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Mail, Phone, Globe, Award } from 'lucide-react'

export default function AboutCompany() {
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
    { icon: CalendarDays, text: "3-day event: October 15-17, 2024" },
    { icon: MapPin, text: "Grand Hotel, New York City" },
    { icon: Users, text: "500+ Expected Attendees" },
    { icon: Globe, text: "International Speakers" },
    { icon: Mail, text: "info@tourismconference.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 "
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About Zep Research</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Tourism Management and Hospitality</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier event bringing together industry professionals, researchers, and academics from around the world.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Zep Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-12">
               Zep Research is a global leader in advancing academic excellence and fostering innovation. Specializing in organizing impactful conferences, research initiatives, and collaboration opportunities, Zep Research creates dynamic environments where researchers, academics, and industry professionals come together to share knowledge, exchange ideas, and collaborate on groundbreaking work across various industries.
              </p>
                <p className="text-muted-foreground px-12">
                  With a commitment to providing a platform for high-quality research dissemination, Zep Research enables individuals and institutions to engage in meaningful discussions about emerging trends, challenges, and solutions. The focus spans diverse fields such as tourism, hospitality, education, sustainability, and technology. By connecting experts, thought leaders, and innovators, Zep Research drives progress and fosters advancements that leave a lasting impact on both academia and industry.

                </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
        Zep Research, in partnership with the International Conference on Tourism Management and Hospitality,
        is committed to driving innovation and fostering collaboration within the tourism and hospitality industries.
          The mission is to create a platform for global knowledge exchange, promote sustainable practices, 
          and highlight emerging trends and solutions. By connecting industry leaders, researchers, and professionals,
          the goal is to inspire progress, share valuable insights, and contribute to the growth and sustainability of tourism and hospitality.
            Through impactful conferences and research initiatives, this mission aims to shape a more innovative and resilient future for the global tourism industry.
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

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future of tourism and hospitality
              </CardDescription>
              <p className="text-muted-foreground">
                October 15-17, 2024 • Grand Hotel, New York City, USA
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}