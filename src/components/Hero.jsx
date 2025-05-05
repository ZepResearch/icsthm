"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Zap, Globe, Sparkles, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";
import { ReserveButton } from "./reserve-button";

export default function Hero() {
  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
        <motion.div
        className="md:absolute top-24 sm:right-24 right-5 z-20 bg-gradient-to-l from-orange-300/90 to-yellow-300/90 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg w-64 md:my-0 my-24 md:ml-0 ml-16"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className="font-bold text-lg mb-2">Hybrid Conference</h3>
        <p className="text-sm mb-2">Experience the conference your way:</p>
        <ul className="list-disc list-inside text-sm">
          <li>Attend in person in Malaysia</li>
          <li>Join virtually from anywhere</li>
        </ul>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Physical
          </span>
          <span className="flex items-center">
            <Headphones className="w-4 h-4 mr-1" />
            Virtual
          </span>
        </div>
      </motion.div>
      <Banner/>
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
      {/* <Image src={'https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png'}alt="zep logo  "
          width={400}
          height={400}
          /> */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
            >
              <span className="block text-primary">
                International Conference on
              </span>
              <span className="block">Sustainable Tourism </span>
              <span className="block">& Hospitality Management </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-2xl max-w-prose"
            >
             Redefining Tourism and Hospitality: Pathways to Sustainability and Innovation
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-lg"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span>22nd - 23rd May 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={'/submission'}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
              Submit Your Paper
            </Button>
              </Link>
              <Link href={'registration'}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/50 hover:text-primary-foreground font-semibold"
              >
              Register Now
            </Button>
              </Link>
              <ReserveButton/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-gray-600">500+ Attendees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-gray-600">50+ Speakers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-gray-600">30+ Countries</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative flex justify-center items-center h-full w-full  p-8">
            <img
              alt="Conference illustration"
              className="object-contain rounded-xl drop-shadow-2xl"
              height={450}
              width={450}
              src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?q=80&w=1683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-2 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg"
            >
              <Sparkles className="h-8 w-8 mb-2" />
              <h3 className="text-xl font-bold">Networking Events</h3>
              <p className="mt-1 text-primary-foreground">
                Connect with industry leaders
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
