'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const policies = [
    {
      title: "How We Collect Your Information",
      content: [
        "We collect information when you:",
        "• Register for the conference",
        "• Contact our support team",
        "• Take part in surveys",
        "• Join our events",
        "",
        "This typically includes basic details like your name and email. We'll always tell you when we need any information and why."
      ].join('\n')
    },
    {
      title: "What We Do With Your Information",
      content: [
        "Your information helps us:",
        "• Process your conference registration",
        "• Keep you updated about the event",
        "• Answer your questions",
        "• Make our services better",
        "",
        "We use your data only for these specific purposes and nothing else."
      ].join('\n')
    },
    {
      title: "Sharing Your Information",
      content: [
        "We only share your information with:",
        "• Our trusted service providers who help run the conference",
        "• Legal authorities if required by law",
        "",
        "We never sell your personal information to third parties."
      ].join('\n')
    },
    {
      title: "Keeping Your Information Safe",
      content: [
        "We protect your information by:",
        "• Using secure servers",
        "• Limiting access to authorized staff",
        "• Regular security updates",
        "",
        "While we work hard to protect your data, no online system is 100% secure. We recommend using strong passwords and keeping your login details private."
      ].join('\n')
    },
    {
      title: "About Cookies",
      content: [
        "We use cookies to:",
        "• Remember your preferences",
        "• Improve your browsing experience",
        "• Analyze how our website is used",
        "",
        "You can control cookies through your browser settings. Want to know more? Visit our Cookie Policy page."
      ].join('\n')
    },
    {
      title: "Your Privacy Rights",
      content: [
        "You have the right to:",
        "• See what information we have about you",
        "• Update your information",
        "• Delete your information",
        "• Opt out of communications",
        "",
        "To exercise these rights, contact our privacy team at privacy@conference.com"
      ].join('\n')
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Your Privacy Matters</h1>
          <p className="text-lg text-muted-foreground">Simple, clear information about how we protect your data</p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl font-semibold text-primary">
                International Conference on Tourism Management and Hospitality
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                We believe in being clear and open about how we collect and use your data.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {policies.map((policy, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border rounded-lg px-4 hover:bg-primary/5 transition-colors"
                  >
                    <AccordionTrigger className="text-lg font-medium text-primary py-4">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed pb-4">
                      {policy.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h2 className="text-lg font-medium text-primary mb-2">Need Help?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about your privacy, please email our privacy team 
                  or call us at +91 7848854815 .
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}