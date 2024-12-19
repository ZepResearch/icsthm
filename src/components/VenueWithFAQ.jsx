import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function VenueWithFAQ() {
  return (
    <section className="w-full bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-orange-500">
              <CardTitle className="text-2xl font-bold">
                Conference Venue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5766923075325!2d100.55548519306322!3d13.74405924155247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee677aa7f5b%3A0x297e4d6053920063!2sRadisson%20Suites%20Bangkok%20Sukhumvit!5e0!3m2!1sen!2sin!4v1734588683427!5m2!1sen!2sin"
            alt="Map of conference venue"
                  className="object-cover"
                  width={800}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">
                Radisson Suites Bangkok Sukhumvit

                </h3>
                <div className="space-y-2 text-base text-gray-500 pb-4">
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-orange-500" />
                    23/2 Soi Sukhumvit 13, Khwaeng Khlong Toei Nuea, Khlong Toei, Bangkok 10110, Thailand
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-orange-500" />
                    +91 8260080050
                  </p>
                  <p className="flex items-center ">
                    <Mail className="mr-2 h-4 w-4 text-orange-500" />
                    info@icsthm.com
                  </p>
                </div>
                <Link href={"/venue"} className="mt-12 ">
                  <Button>Know more </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b border-orange-500 ">
              <CardTitle className="text-2xl text-orange-400 drop-shadow-sm font-bold">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col   ">
              <Accordion type="single" collapsible className="w-full ">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-xl">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base  text-gray-500">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Who should attend the ICTMH conference?",
    answer: "This conference is designed for tourism professionals, hospitality leaders, researchers, academics, policymakers, and innovators who are passionate about shaping sustainable practices in the tourism and hospitality sectors.",
  },
  {
    question: "What makes ICTMH different from other tourism conferences?",
    answer: "ICTMH focuses on post-pandemic innovations, sustainable strategies, and resilience in the tourism and hospitality industries, bringing together a global audience from over 30 countries and featuring insights from 50+ industry experts.",
  },
  {
    question: "Can I submit a paper if Im not an academic?",
    answer: "Yes! ICTMH welcomes contributions from industry professionals, researchers, and innovators from both academic and non-academic backgrounds who have valuable insights and experiences to share.",
  },
  {
    question: "What are the benefits of presenting at ICTMH?",
    answer: "Presenters gain global visibility, receive feedback from industry experts, have their work featured in conference proceedings, and access opportunities for publication in esteemed journals.",
  },
  {
    question: "What types of sessions will be available?",
    answer: "ICTMH offers a variety of sessions including keynote speeches, panel discussions, workshops, paper presentations, and interactive Q&A sessions to provide a comprehensive experience for all attendees.",
  },
  {
    question: "What kind of innovations will be showcased at ICTMH?",
    answer: "Expect to see innovations in eco-friendly travel, digital transformation in hospitality, sustainable event management, and AI-driven guest services, among other forward-thinking solutions.",
  },
  {
    question: "Can attendees access conference materials after the event?",
    answer: "Yes! Registered participants will have access to recordings of sessions, presentation slides, and conference proceedings for a limited time after the event.",
  },
];