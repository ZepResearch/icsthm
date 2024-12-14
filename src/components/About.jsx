"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";

const stats = [
  { id: 1, name: "Attendees", value: 8000, suffix: "+" },
  { id: 2, name: "Speakers", value: 35, suffix: "+" },
  { id: 3, name: "Uptime guarantee", value: 99.9, suffix: "%" },
  { id: 4, name: "Traffic Sources", value: 70, prefix: "", suffix: "+" },
];

export default function AboutSection() {
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

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-12 lg:py-24 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center ">
            <div className="relative w flex justify-center items-center  aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Conference Image"
                width={500}
                height={400}
                objectFit=""
                className="object-center w-96 h-60 rounded-xl "
              />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl underline underline-offset-4 decoration-orange-500">
              About The Conference
            </h2>
            <p className="text-muted-foreground">
              The International Conference on Tourism Management and Hospitality
              (ICTMH) unites global leaders, researchers, and innovators to
              reimagine the future of tourism and hospitality, fostering
              sustainable growth, resilience, and transformative ideas for a
              dynamic, post-pandemic world.
            </p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              >
                <a href="/about-conference">Read More</a>
              </Button>
            </motion.div>
            <h1 className="text-lg tracking-tighter font-semibold underline underline-offset-4 decoration-orange-500">
            Insights into the Conference
            </h1>
            <dl className="grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-gray-900/10 pl-2"
                >
                  <dt className="text-sm leading-3 text-orange-500 drop-shadow-sm font-bold tracking-wider">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {inView && (
                      <>
                        {stat.prefix}
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          decimals={stat.value % 1 !== 0 ? 1 : 0}
                        />
                        {stat.suffix}
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
