"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

export default function ConferenceObjectives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const objectives = [
    {
      title: "Knowledge Exchange",
      description:
        "The International Conference on Tourism Management and Hospitality (ICTMH) unites global leaders, researchers, and innovators to reimagine the future of tourism and hospitality, fostering sustainable growth, resilience, and transformative ideas for a dynamic, post-pandemic world.",
    },
    {
      title: "Networking",
      description:
        "Establish professional connections among professionals, researchers, and students, which will promote significant collaboration and partnerships across the industry.",
    },
    {
      title: "Innovation",
      description:
        "Highlight pioneering approaches and transformational technologies informing the future landscape of tourism and hospitality.",
    },
    {
      title: "Sustainability",
      description:
        "Promote sustainable and responsible tourism practices that impinge upon global challenges while contributing to long-term resilience in the industry.",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full  pb-24 sm:pl-24 bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900"
    >
      <div className="container mx-auto px-4  md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-col space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl  text-primary"
            >
              Objectives of the Conference
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {objectives.map((objective, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary">
                        {objective.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {objective.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://illustrations.popsy.co/amber/communication.svg"
                alt="Conference Objectives"
                layout="fill"
                className="object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
