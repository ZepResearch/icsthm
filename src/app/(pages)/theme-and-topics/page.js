'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Calendar, FileText, UserPlus, BirdIcon, File } from "lucide-react"

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
    "Air Transportation Management", "Applied Financial Accounting", "Applied Macroeconomics",
    "Applied Microeconomics", "Archaeological Sites Management", "Aviation Management",
    "Big Data and Business Intelligence", "Business English", "Business Ethics",
    "Business Law", "Business Operations", "City Tourism",
    "Congress Management", "Contemporary Nutrition", "Corporate Social Responsibility",
    "Cost Accounting", "Crisis Management and Tourism", "Customer Experience Management",
    "Destination Management", "Digitalization and Tourism", "Economic Sustainability",
    "Ecotourism", "Entrepreneurship and SMEs", "E-Tourism",
    "Event Management", "Tourism and Financial Management", "Food and Beverage Management",
    "Food Production and Service", "Foreign Language", "Global Business Environment",
    "Health and Wellbeing Tourism", "Heritage Tourism", "Hospitality and Tourism Fundamentals",
    "Hospitality Project Planning", "Hotel Business Operations", "Human Resource Management",
    "ICT And Tourism", "Information Systems and Technology", "Intangible Cultural Heritage Management",
    "International Management", "Lodging Operations", "Management Accounting",
    "Marine and Coastal Areas Tourism", "Market Research", "Mathematics and Tourism Management",
    "Medical Tourism", "MICE", "Operations Management",
    "Restaurant and Event Management", "Rural Tourism", "Social Media Marketing",
    "Sport Tourism", "Statistics", "Strategic Management",
    "Sustainable Tourism Development", "Tour Operations", "Tourism Development",
    "Tourism Geography", "Tourism Law", "Tourism Marketing",
    "Tourism Mobilities", "Urban and Regional Tourism Planning", "Wildlife and Adventure Tourism",
    "World Heritage Management"
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
          <h2 className="text-4xl font-bold text-primary mb-4">Theme and Topics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse range of topics covered in our conference on Tourism Management and Hospitality.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                The 5th International Conference on Tourism Management and Hospitality on 22 – 24 November 2024 in London, UK encourages all to present their recent research work. This conference is considered a prestigious event organized with the motivation to provide an excellent international platform for academics, researchers, managers, industrial participants, and students to share their research findings with global experts. All abstract submissions will be peer-reviewed and evaluated based on originality, technical and/or research depth, accuracy, and relevance with the theme of the conference.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-orange-500">Conference Themes and Topics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-black">
                The conference is seeking submissions related to the following conference topics: Tourism Management and Hospitality. Other related tracks and topics will also be considered.
              </p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-accent-foreground p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                    }}
                  >
                    {topic}
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-muted text-primary p-6">
              <CardTitle className="text-3xl">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                Submitted abstracts will be evaluated by the Scientific Committee. All submissions should report original and previously unpublished research results no matter the type of research paper you are presenting. Manuscripts should meet the format set by the Conference committee and are subject to review. Detailed instructions and full paper submission guidelines will be emailed within a few weeks following the conference.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12">
          <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="default">
            <FileText className="mr-2 h-6 w-6" />
            Submit Your Paper
          </Button>
          <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
            <UserPlus className="mr-2 h-6 w-6" />
            Register for the Conference
          </Button>
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
                  { date: "July 31, 2024", event: "Abstract Submission Deadline", icon: <FileText className="h-6 w-6" /> },
                  { date: "August 15, 2024", event: "Notification of Acceptance", icon: <UserPlus className="h-6 w-6" /> },
                  { date: "September 1, 2024", event: "Early Bird Registration", icon: <BirdIcon className="h-6 w-6" /> },
                  { date: "October 15, 2024", event: "Full Paper Submission", icon: <File className="h-6 w-6" /> },
                  { date: "November 22-24, 2024", event: "Conference Dates", icon: <Calendar className="h-6 w-6" /> }
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