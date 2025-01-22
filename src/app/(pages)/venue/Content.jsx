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
              src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference Venue"
              width={600}
              height={400}
              className="rounded-2xl drop-shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4  underline underline-offset-4 decoration-orange-500">
              Conference Venue
            </h1>
            <p className="text-lg mb-4">
              Welcome to the International Conference on Sustainable Tourism  and
              Hospitality Management. Our venue in the vibrant city of Bangkok offers state-of-the-art facilities to
              ensure a productive and enjoyable experience for all attendees. With modern conference rooms,
              cutting-edge audiovisual equipment, and spacious networking areas, weve created the perfect
              environment for knowledge sharing and collaboration.
            </p>
            <p className="text-lg mb-4">
              Situated in the heart of Bangkok, our venue provides easy access to public transportation,
              world-class hotels, and a variety of dining options. Whether youre here to present, learn,
              or network, youll find our venue both comfortable and inspiring.
            </p>
            <div className="flex items-center text-gray-950 font-semibold pb-4">
            <Hotel className="mr-2"/>
            <h2>Radisson Suites Bangkok Sukhumvit            </h2>
            </div>
            <div className="flex items-center text-gray-950 font-semibold">
              <MapPin className="mr-2" />
              <span>23/2 Soi Sukhumvit 13, Khwaeng Khlong Toei Nuea, Khlong Toei, Bangkok 10110, Thailand,</span>
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
        <h3 className="text-4xl font-bold mb-4  underline underline-offset-4 decoration-orange-500 text-center">
          Location
        </h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5766923075325!2d100.55548519306322!3d13.74405924155247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee677aa7f5b%3A0x297e4d6053920063!2sRadisson%20Suites%20Bangkok%20Sukhumvit!5e0!3m2!1sen!2sin!4v1734588683427!5m2!1sen!2sin"
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
        <h4 className="text-4xl font-bold mb-4 underline underline-offset-4 decoration-orange-500 text-center">
          Nearby Attractions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Grand Palace",
              description: "Explore the majestic former residence of Thai royalty. This stunning complex features intricate architecture, golden spires, and sacred Buddhist temples. Don't miss the famous Emerald Buddha, housed within the palace grounds.",
              img:"https://plus.unsplash.com/premium_photo-1694475357558-2b19f2344599?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              title: "Wat Phra Chetuphon",
              description: "Visit the famous Temple of the Reclining Buddha, also known as Wat Pho. Home to a 46-meter long golden reclining Buddha statue, this temple is also the birthplace of traditional Thai massage. Explore the beautiful courtyards and marvel at the intricate murals.",
              img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198049/samples/wtd41p4ycusjlcb1v5ht.jpg"
            },
            {
              title: "Chatuchak Weekend Market",
              description: "Experience one of the world's largest outdoor markets, featuring over 15,000 stalls. From local crafts and antiques to fashion and street food, Chatuchak offers a vibrant shopping experience that captures the essence of Thai culture and commerce.",
              img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198246/samples/cu7zfbyk4ungsv5kvc5a.jpg"
            },
            {
              title: "Chao Phraya River",
              description: "Take a scenic boat tour along Bangkok's main waterway, often called the 'River of Kings'. Observe the city's skyline, historic temples, and local life along the riverbanks. For a unique experience, try a dinner cruise to see Bangkok illuminated at night.",
              img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198320/samples/bk5wfjsidtjfr8ycgddq.jpg"
            },
            {
              title: "Jim Thompson House",
              description: "Discover traditional Thai architecture and art collections in this beautifully preserved home of American businessman Jim Thompson. The house showcases his extensive collection of Southeast Asian art and offers insight into Thai culture and history.",
              img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198367/samples/kyssuh36c5n68tvz0vkw.jpg"
            },
            {
              title: "Lumpini Park",
              description: "Relax in Bangkok's largest and oldest public park, a green oasis in the heart of the city. Enjoy jogging paths, paddle boats on the lake, and open-air aerobics classes. Keep an eye out for the park's resident monitor lizards, a unique sight in an urban setting.",
              img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198412/samples/dwfa0cxnlphedzrkgiyj.jpg"
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

