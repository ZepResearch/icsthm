'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, BirdIcon, File } from 'lucide-react'
import Link from 'next/link'

export default function ThemeAndTopics() {
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

  const topics = [
  {
    title: "Sustainable Tourism Development",
    content: [
      "Sustainable destination management strategies",
      "Community-based tourism and local empowerment",
      "Eco-tourism: Practices, challenges, and opportunities",
      "Preservation of cultural heritage through tourism",
      "Sustainable tourism policies and governance"
    ]
  },
  {
    title: "Sustainable Hospitality Management",
    content: [
      "Green building practices in the hospitality industry",
      "Energy efficiency and water conservation in hotels",
      "Waste management and circular economy in hospitality",
      "Sustainable procurement and supply chain management",
      "Creating eco-conscious guest experiences"
    ]
  },
  {
    title: "Technology and Innovation in Sustainable Tourism",
    content: [
      "Smart tourism: Leveraging technology for sustainability",
      "AI, IoT, and blockchain for sustainable hospitality operations",
      "Digital marketing for eco-friendly tourism destinations",
      "Tech-driven approaches for reducing environmental impacts"
    ]
  },
  {
    title: "Tourism and Climate Change",
    content: [
      "Carbon footprint of tourism and mitigation strategies",
      "Climate-resilient tourism planning",
      "Renewable energy in tourism and hospitality sectors",
      "Adapting to climate change: Lessons from vulnerable regions"
    ]
  },
  {
    title: "Economic and Social Dimensions of Sustainable Tourism",
    content: [
      "Inclusive tourism: Addressing social equity and access",
      "Economic impacts of sustainable tourism practices",
      "Developing sustainable business models in hospitality",
      "Balancing over-tourism and responsible tourism"
    ]
  },
  {
    title: "Research and Education in Sustainable Tourism",
    content: [
      "Innovations in tourism and hospitality education",
      "Role of academia in promoting sustainable tourism",
      "Case studies on successful sustainable tourism models",
      "Research collaborations for global impact"
    ]
  }
]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">Conference Themes</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Sustainable Tourism & Hospitality Management</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring innovative strategies and research in sustainable tourism and hospitality management.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                The International Conference on Sustainable Tourism & Hospitality Management invites researchers, industry professionals, policymakers, and innovators to present their recent work in sustainable tourism and hospitality practices. This conference is a prestigious event designed to provide an excellent international platform for sharing groundbreaking research, innovative solutions, and actionable strategies to promote sustainability in the tourism and hospitality sectors.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                All abstract submissions will undergo rigorous peer review to ensure originality, technical merit, and relevance to the conference themes of sustainable tourism and hospitality management.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-primary">Session and Tracks</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-black">
                The conference encourages submissions on the following topics related to sustainable tourism and hospitality management. Other relevant areas will also be considered.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-800 text-base">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-muted text-orange-500 p-6 border-b-2 border-orange-400 rounded-md">
              <CardTitle className="text-3xl">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                Submitted abstracts will be reviewed by the Scientific Committee to ensure they align with the conference objectives and themes. Submissions should report original and previously unpublished research findings. Manuscripts must adhere to the conference&apos;s format and guidelines, which will be shared with accepted participants.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="default">
              <FileText className="mr-2 h-6 w-6" />
              Submit Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
              <UserPlus className="mr-2 h-6 w-6" />
              Register for the Conference
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl flex items-center">
                <Calendar className="mr-2 h-8 w-8" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { date: "December 29th,2024", event: "Early bird registration deadline", icon: <BirdIcon className="h-6 w-6" /> },
                  { date: "January 9th,2025", event: "Abstract submission deadline", icon: <UserPlus className="h-6 w-6" /> },
                  { date: "January 25th, 2025", event: "Full paper submission Deadline", icon: <File className="h-6 w-6" /> },
                  { date: "February 10th,2025", event: "Final Registration Deadline", icon: <Calendar className="h-6 w-6" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-lg text-muted-foreground">
                      <strong>{item.date}:</strong> {item.event}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

