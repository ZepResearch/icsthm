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
import { Hotel, MapPin } from 'lucide-react';

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
              src="https://images.unsplash.com/photo-1671500338570-b5229b824c39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference Venue"
              width={600}
              height={400}
              className="rounded-2xl drop-shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
  <h1 className="text-4xl font-bold mb-4 text-orange-500">
    Conference Venue
  </h1>
  <p className="text-lg mb-4">
    Welcome to the International Conference on Sustainable Tourism and
    Hospitality Management. This year, we’re hosting the event at the
    Holiday Inn Express, Kuala Lumpur City Centre, an IHG Hotel. Located in
    the heart of Malaysia’s vibrant capital, the venue offers modern
    amenities to ensure a productive and enjoyable experience for all
    attendees.
  </p>
  <p className="text-lg mb-4">
    With comfortable conference facilities, contemporary design, and easy
    access to local attractions, the hotel is perfect for learning,
    networking, and sharing ideas. Kuala Lumpur’s dynamic culture and
    hospitality will make your visit memorable.
  </p>
  <div className="flex items-center text-gray-950 font-semibold pb-4">
    <Hotel className="mr-2" />
    <h2>Holiday Inn Express</h2>
  </div>
  <div className="flex items-center text-gray-950 font-semibold">
    <MapPin className="mr-2" />
    <span>
      Holiday Inn Express, Kuala Lumpur City Centre, an IHG Hotel, Kuala
      Lumpur, Malaysia
    </span>
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
        <h3 className="text-4xl font-bold mb-4 text-orange-500 text-center">
          Location
        </h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.574347425009!2d101.708685!3d3.1507630000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362aba001bed%3A0x1a95bd9e2e38cad4!2sHoliday%20Inn%20Express%20Kuala%20Lumpur%20City%20Centre%20by%20IHG!5e0!3m2!1sen!2sin!4v1744704386743!5m2!1sen!2sin"            width="100%"
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
        <h4 className="text-4xl font-bold mb-4  text-orange-500 text-center">
          Nearby Attractions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Petronas Twin Towers",
              description:
                "Marvel at the iconic Petronas Twin Towers, once the tallest buildings in the world. Enjoy breathtaking views from the Skybridge and observation deck, and explore the Suria KLCC mall at the base for shopping and dining.",
              img: "https://plus.unsplash.com/premium_photo-1700955569542-735a654503bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "KL Tower (Menara Kuala Lumpur)",
              description:
                "Visit one of the tallest telecommunications towers in the world. The KL Tower offers panoramic city views, a revolving restaurant, and thrilling attractions like the Sky Deck and Sky Box.",
              img: "https://images.unsplash.com/photo-1561365549-2601f188b661?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Bukit Bintang",
              description:
                "Explore Kuala Lumpur’s vibrant shopping and entertainment district. From trendy cafes and luxury malls to street food and nightlife, Bukit Bintang offers something for every traveler.",
              img: "https://images.unsplash.com/photo-1548943468-babf66c01664?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "KL Forest Eco Park",
              description:
                "Discover a tropical rainforest reserve in the middle of the city. Walk the canopy walkways and enjoy a breath of fresh air while surrounded by lush greenery and native wildlife.",
              img: "https://images.unsplash.com/photo-1700236660891-61e9234c8ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Merdeka Square",
              description:
                "Visit the historic site where Malaysia declared its independence. The square is surrounded by beautiful colonial architecture, including the Sultan Abdul Samad Building, and is perfect for a leisurely stroll.",
              img: "https://images.unsplash.com/photo-1663237155810-a292cca8fe47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
             {
              title: "Central Market",
              description:
                "Experience Malaysian culture through handicrafts, local art, and traditional food. Central Market is a cultural hub where you can shop for souvenirs and watch live performances.",
              img: "https://images.unsplash.com/photo-1736056338252-ea0dca186862?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            
          ].map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {attraction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={attraction.img}
                      alt={attraction.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                  <CardDescription className="flex-grow">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

