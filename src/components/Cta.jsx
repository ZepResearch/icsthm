"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Users, Gem } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ctaItems = [
  {
    title: "Awards",
    description:
      "Honor the pioneers and visionaries who are setting new standards in tourism and hospitality",
    icon: Award,
    link: "/awards",
  },
  {
    title: "Sponsorship",
    description:
      "Elevate your brand by partnering with us and gaining global exposure in a key industry",
    icon: Gem,
    link: "/sponsorship",
  },
  {
    title: "Venue",
    description:
      "Immerse yourself in our cutting-edge conference facilities, designed for innovation and impactful discussions",
    icon: MapPin,
    link: "/venue",
  },
  {
    title: "Committee",
    description:
      "Meet the experts shaping the future of tourism and hospitality with their knowledge and leadership",
    icon: Users,
    link: "/committee",
  },
];

export default function CTASection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="p-4"
          >
            <Card className="overflow-hidden  backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  Shape the Future of Tourism and Hospitality with Us
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Explore key aspects of our conference
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {ctaItems.map((item, index) => (
                  <motion.div key={item.title} variants={itemVariants}>
                    <Card className="h-full bg-white/50 hover:bg-white/80 transition-colors duration-300 border border-primary/10 hover:border-primary/30">
                      <CardContent className="flex items-start p-4">
                        <item.icon className="h-16 w-16 text-primary mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          <Link href={item.link}>Learn More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="p-4"
          >
            <Card className="overflow-hidden bg-white backdrop-blur-sm border-2 border-primary/20">
              <CardHeader className="relative pb-0 ">
                <motion.div
                className="relative z-10"
                  animate={isHovered ? "hover" : "initial"}
                  variants={imageVariants}
                >
                  <Image
                    src="/assets/cta.png"
                    alt="Conference Illustration"
                    width={500}
                    height={300}
                    className="mx-auto  opacity-90"
                  />
                  </motion.div>
                  <Image
                    src="/assets/ctabehind.png"
                    alt="Conference Illustration"
                    width={350}
                    height={300}
                    className="mx-auto z-0 absolute top-0 left-0 right-0 "
                  />
                
                <CardTitle className="text-3xl font-bold text-primary mt-4 relative z-10">
                  Register Now
                </CardTitle>
                <CardDescription className="text-lg mt-2 relative z-10 text-black">
                  Secure your spot at the International Conference on Tourism
                  Management and Hospitality
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4 relative z-10">
                <p className="mb-4 text-muted-foreground">
                  Join industry leaders, researchers, and professionals for an
                  enriching experience in the world of tourism and hospitality.
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    "Engaging keynote speakers",
                    "Interactive workshops",
                    "Networking opportunities",
                    "Latest industry insights",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-muted-foreground"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <motion.div
                  className="w-full"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button
                    asChild
                    className="w-full bg-primary text-lg text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    <Link href="/registration">Register for the Conference</Link>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
