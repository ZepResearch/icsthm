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
import { MapPin } from "lucide-react";

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
              Hospitality. Our venue offers state-of-the-art facilities to
              ensure a productive and enjoyable experience for all attendees.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2" />
              <span>123 Conference Street, Tourism City, 12345</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740665!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1636567096378!5m2!1sen!2sus"
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
        <h1 className="text-4xl font-bold mb-4  underline underline-offset-4 decoration-orange-500 text-center">
          Near by Attractions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Historic Museum",
              description: "Explore the rich history of Tourism City",
            },
            {
              title: "Scenic Park",
              description: "Relax in nature between conference sessions",
            },
            {
              title: "Local Cuisine Street",
              description: "Experience authentic local flavors",
            },
            {
              title: "Art Gallery",
              description: "Immerse yourself in local and international art",
            },
            {
              title: "Shopping District",
              description: "Find unique souvenirs and local crafts",
            },
            {
              title: "Beachfront",
              description: "Enjoy the beautiful coastline and water activities",
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
