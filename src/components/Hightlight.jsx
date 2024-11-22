"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    id: "Sustainable Tourism Practices",
    title: "Sustainable Tourism Practices",
    description:
      "Find out the best sustainable tourism practices for ecotourism to deliver a favorable impact on natural resources, the local community, and responsible travel.",
    image: "https://illustrations.popsy.co/amber/abstract-art-3.svg",
  },
  {
    id: "digital-hospitality",
    title: "Digital Transformation in Hospitality",
    description:
      "Discover how technology is changing the domain of hospitality, leading towards better guest experience, efficiency, and innovation in hospitality management.",
    image: "https://illustrations.popsy.co/amber/abstract-art-5.svg",
  },
  {
    id: "cultural-tourism",
    title: "Cultural Tourism and Heritage Management",
    description:
      "Learn how cultural tourism can be used for heritage preservation to be appreciated by a developing culture.",
    image: "https://illustrations.popsy.co/amber/abstract-art-4.svg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ConferenceHighlightSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-2 decoration-orange-500">
          Conference Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCard(highlight.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href={`/highlights/${highlight.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
