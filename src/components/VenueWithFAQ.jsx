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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740665!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1636567096378!5m2!1sen!2sus"
                  alt="Map of conference venue"
                  className="object-cover"
                  width={800}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">
                  Grand Hotel & Convention Center
                </h3>
                <div className="space-y-2 text-base text-gray-500 pb-4">
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-orange-500" />
                    123 Conference Ave, Tourism City, TC 12345
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-orange-500" />
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center ">
                    <Mail className="mr-2 h-4 w-4 text-orange-500" />
                    info@grandhotelconvention.com
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
    question: "What are the dates for the conference?",
    answer:
      "The International Conference on Tourism Management & Hospitality will take place from September 15-17, 2024.",
  },
  {
    question: "Is there a dress code for the conference?",
    answer:
      "The dress code is business casual. We recommend comfortable attire suitable for a professional conference environment.",
  },
  {
    question: "Are meals included in the conference fee?",
    answer:
      "Yes, the conference fee includes lunch and refreshments during the scheduled breaks. Dinner is included for Business Pass holders.",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "You can register for the conference through our online registration portal. Early bird discounts are available until July 31, 2024.",
  },
  {
    question: "Is there accommodation available at the conference venue?",
    answer:
      "Yes, the Grand Hotel offers special rates for conference attendees. You can book your room through our conference website.",
  },
];
