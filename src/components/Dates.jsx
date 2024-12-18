"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Book, Globe, Lightbulb, Users } from "lucide-react";

const timeline = [
  {
    name: "Early bird registration deadline",
    description:
      "Submit your research on sustainable development and green technologies to benefit from exclusive early rates.",
    date: "December 29rd,2024",
    dateTime: "2024-12",
    icon: <Book className="h-6 w-6" />,
  },
  {
    name: "Abstract submission deadline",
    description:
      "Register through our seamless paperless system and receive a virtual conference kit to enhance your experience.",
    date: "January 9th,2025",
    dateTime: "2025-01",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    name: "Full paper submission Deadline",
    description:
      "Top submissions will be featured in our Green Innovation Showcase, highlighting groundbreaking sustainability efforts.",
    date: "January 25th,2025",
    dateTime: "2025-01",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    name: "Final Registration Deadline",
    description:
      "Don’t miss three days of networking, insightful discussions, and in-depth exploration of sustainable development practices.",
    date: "February 10th,2025",
    dateTime: "2025-02",
    icon: <Users className="h-6 w-6" />,
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pb-0"
    >
      <Card className="relative flex items-center">
        <CardContent className="flex p-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
          >
            {item.icon}
          </motion.div>
          <div className="ml-4 flex flex-col">
            <time
              dateTime={item.dateTime}
              className="text-sm font-semibold text-primary"
            >
              {item.date}
            </time>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Dates() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Key Dates to Remember
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Stay ahead of the curve.Mark these important dates and be part of a
            transformative conference.
          </p>
        </div>

        <div className="mt-16 flex flex-col-reverse sm:flex-row justify-center items-start gap-12">
          <div className="relative inline-flex">
            <motion.div
              ref={timelineRef}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-6 top-5 -bottom-5 w-0.5 bg-primary"
              style={{ originY: 0 }}
            />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
          {/* <div className="w-full flex justify-center items-center sm:w-1/2 sm:pl-12">
            <Image
              src="https://illustrations.popsy.co/amber/man-riding-a-rocket.svg"
              alt="Illustration of a person riding a rocket, symbolizing the journey towards a sustainable future"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div> */}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-lg text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/schedule">Get Full Conference Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
