"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from 'lucide-react';

export default function VenuePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 text-foreground">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="https://illustrations.popsy.co/amber/searching-location-on-the-phone.svg"
              alt="Conference Venue"
              width={500}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4  underline underline-offset-4 decoration-orange-500">
              Conference Venue
            </h1>
            <p className="text-lg mb-4">
              Welcome to the International Conference on Tourism Management and
              Hospitality. Our venue in the vibrant city of Bangkok offers state-of-the-art facilities to
              ensure a productive and enjoyable experience for all attendees.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2" />
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-4  underline underline-offset-4 decoration-orange-500 text-center">
          Location
        </h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.614924449815!2d-73.98823892346994!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682803958541!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="container mx-auto px-4 py-16"
>
  <h1 className="text-4xl font-bold mb-4 underline underline-offset-4 decoration-orange-500 text-center">
    Nearby Attractions
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Grand Palace",
        description: "Explore the majestic former residence of Thai royalty",
      },
      {
        title: "Wat Phra Chetuphon",
        description: "Visit the famous Temple of the Reclining Buddha",
      },
      {
        title: "Chatuchak Weekend Market",
        description: "Experience one of the world's largest outdoor markets",
      },
      {
        title: "Chao Phraya River",
        description: "Take a scenic boat tour along Bangkok's main waterway",
      },
      {
        title: "Jim Thompson House",
        description: "Discover traditional Thai architecture and art collections",
      },
      {
        title: "Lumpini Park",
        description: "Relax in Bangkok's largest and oldest public park",
      },
    ].map((attraction, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">
              {attraction.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{attraction.description}</CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</motion.section>
    </div>
  );
}

