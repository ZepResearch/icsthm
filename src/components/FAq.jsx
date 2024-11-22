"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

const faqs = [
  {
    question:
      "What is the International Conference on Tourism Management and Hospitality about?",
    answer:
      "The conference brings together global leaders, innovators, and professionals to explore the latest trends and challenges in tourism management and hospitality, with a special focus on sustainability and digital transformation.",
  },
  {
    question: "When and where will the conference be held?",
    answer:
      "Stay tuned! Dates and venue will be announced soon. Check our website regularly or subscribe to our newsletter for instant updates.",
  },
  {
    question: "Who should attend this conference?",
    answer:
      "We welcome tourism and hospitality professionals, researchers, academics, policymakers, and students passionate about shaping the future of the industry.",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "Registration will open soon. You'll be able to secure your spot through our user-friendly online registration portal. Early bird discounts will be available!",
  },
  {
    question: "Will there be opportunities for networking?",
    answer:
      "Enjoy multiple networking sessions, including interactive coffee breaks, themed lunch discussions, and our grand gala dinner. Connect, collaborate, and create lasting professional relationships.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <CardTitle className="flex justify-between items-center text-orange-800 text-xl">
                    <span className="flex-1 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-orange-500 rounded-full p-1 text-white"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CardContent className="pt-2 pb-4 text-orange-700">
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-lg leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
          <div className="flex justify-center">
            <Button size="lg" className="text-lg">
              {" "}
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
