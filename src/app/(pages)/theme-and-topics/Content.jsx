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
        "Creating better destination management plans",
        "Helping local communities benefit from tourism",
        "Making eco-tourism work in practice",
        "Protecting cultural heritage sites",
        "Setting up effective tourism policies"
      ]
    },
    {
      title: "Green Hospitality Practices",
      content: [
        "Building eco-friendly hotels",
        "Saving energy and water in hotels",
        "Managing waste and recycling",
        "Choosing sustainable suppliers",
        "Creating green guest experiences"
      ]
    },
    {
      title: "Technology in Tourism",
      content: [
        "Using smart tech for sustainability",
        "AI and blockchain in hotels",
        "Marketing eco-friendly destinations",
        "Tech solutions for reducing environmental impact"
      ]
    },
    {
      title: "Tourism and Climate",
      content: [
        "Reducing tourism carbon footprint",
        "Planning for climate change",
        "Using renewable energy",
        "Learning from at-risk destinations"
      ]
    },
    {
      title: "Tourism Economics and Society",
      content: [
        "Making tourism open to everyone",
        "Understanding the money in sustainable tourism",
        "Building lasting business models",
        "Managing tourist numbers responsibly"
      ]
    },
    {
      title: "Research and Learning",
      content: [
        "New ways to teach tourism",
        "How universities help sustainable tourism",
        "Learning from success stories",
        "Working together globally"
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
          <h1 className="text-4xl font-bold text-primary mb-4">Making Tourism Better for Everyone</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us to discover new ways to make tourism and hospitality more sustainable.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl">About the Conference</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                We bring together experts who want to make tourism better. Share your ideas with researchers, industry leaders, and policymakers. Learn about what works in sustainable tourism and hospitality.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                All submissions are carefully reviewed to ensure they bring new and valuable insights to the field.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-primary">What We&apos;ll Cover</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-black">
                Share your work in these areas or suggest other relevant topics:
              </p>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-800 text-base leading-relaxed">{item}</li>
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
              <CardTitle className="text-3xl">How to Submit Your Work</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                Our team will review your work to make sure it fits the conference goals. Your research should be new and not published elsewhere. We&apos;ll send you guidelines for formatting after we accept your work.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="default">
              <FileText className="mr-2 h-6 w-6" />
              Send Us Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
              <UserPlus className="mr-2 h-6 w-6" />
              Sign Up to Attend
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl flex items-center">
                <Calendar className="mr-2 h-8 w-8" />
                Key Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { date: "December 29th, 2024", event: "Early bird signup ends", icon: <BirdIcon className="h-6 w-6" /> },
                  { date: "January 9th, 2025", event: "Submit your abstract by", icon: <UserPlus className="h-6 w-6" /> },
                  { date: "January 25th, 2025", event: "Full paper due", icon: <File className="h-6 w-6" /> },
                  { date: "February 10th, 2025", event: "Last day to register", icon: <Calendar className="h-6 w-6" /> }
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