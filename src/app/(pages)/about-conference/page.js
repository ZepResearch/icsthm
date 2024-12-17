'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award } from 'lucide-react'

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
    { icon: CalendarDays, text: "2-day thought-provoking event" },
    { icon: MapPin, text: "At the centre of Bangkok, Thailand" },
    { icon: Users, text: "Connect with 500+ leaders in the industry" },
    { icon: Lightbulb, text: "Over 20+ workshops on emerging trends" },
    { icon: Globe, text: "Speakers from more than 30 countries" },
    { icon: Award, text: "Annual Tourism Innovation Awards" },
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
                <CardTitle className="text-2xl font-bold text-primary">About ICSTMH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground px-12 text-justify">
                 The International Conference on Tourism Management and Hospitality is a premier global event that brings together thought leaders, industry professionals, researchers, and innovators from around the world. Over three days, participants will explore the latest trends, challenges, and opportunities within the tourism and hospitality sectors, with a focus on sustainability, digital transformation, and the future of travel. This conference serves as a unique platform to exchange ideas, foster collaborations, and drive actionable solutions for the industry&apos;s most pressing issues.

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
                <CardTitle className="text-2xl font-bold text-primary"> Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
Fostering innovation and collaboration, with a focus on sustainable practices in the tourism and hospitality industry through knowledge sharing, networking, and showcasing the most up-to-date research and technologies.
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
                Be a part of redefining the future of tourism and hospitality.
              </CardDescription>
              <p className="text-muted-foreground">
                April 24th - 25th, 2024 • Bangkok, Thailand
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}