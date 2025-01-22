"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, Image as ImageIcon, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ModePresentation() {
  const [activeMode, setActiveMode] = useState(null);

  const presentationModes = [
    {
      title: "Speak at the Event",
      description:
        "Give a live talk about your work. Share your ideas face-to-face with others in tourism and hospitality. Get instant feedback and have great discussions about your research.",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "You well have 15 minutes for your talk. Please send us your slides by email to info[@]ictmh.org at least 10 days before the event. If you cant send them early, you can bring them to the registration desk at least 2 hours before your talk time.",
    },
    {
      title: "Show a Poster",
      description:
        "Display your work on a poster. Meet people one-on-one and talk about your research in a relaxed way. Great for new projects or ongoing work. Perfect for making connections in tourism and hospitality.",
      icon: ImageIcon,
      image: "https://images.unsplash.com/photo-1493972741200-51d407e0ee33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Each poster gets 3 minutes of display time. Send us one page as a PDF or image file. We well put all posters on our website before the event so everyone can see them.",
    },
    {
      title: "Present Online",
      description:
        "Join us from anywhere in the world. Share your work online and connect with tourism experts globally. Ask questions and network just like you are there in person.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "We well email you the online meeting link one week before the event. Joining is easy - just click the link we send you. Remember to sign up first if you want to present online.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            How to Present
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Share Your Work at Our Tourism Conference
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pick how you like to present your research
          </p>
        </motion.div>

        {presentationModes.map((mode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 overflow-hidden"
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/3">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center">
                  <mode.icon className="w-8 h-8 mr-2" />
                  {mode.title}
                </h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  {mode.description}
                </p>
                <Button
                  className="mb-4 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() =>
                    setActiveMode(activeMode === index ? null : index)
                  }
                >
                  {activeMode === index ? "Hide Details" : "Learn More"}
                </Button>
                {activeMode === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mt-4 p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      {mode.content}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}