"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pb } from "@/lib/pocketbase";


// Updated to match exact PocketBase select field choices
const speakerCategories = [
  // { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  // { id: "Conference Chair", title: "Conference Chair" },
  // { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Session Chair", title: "Session Chair" },
];

const SpeakerCard = ({ name, role, image, bio,collectionId, id, country, college, onMoreInfo }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <img 
      src={ `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${id}/${image}` } 
      alt={name} 
      className="w-full h-72 object-contain" 
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-orange-800">{name}</h3>
      <p className="text-orange-600">{role}</p>
      <p className="text-sm">{college}</p>
      <p className="text-sm">{country}</p>
      <button
        onClick={() => onMoreInfo({ name, role, image, bio ,collectionId, id ,country,college}) }
        className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors duration-300"
      >
        More info
      </button>
    </div>
  </motion.div>
);

const Drawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-40"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 overflow-y-auto"
        >
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}` }
              alt={speaker.name}
              className="w-full h-96 object-contain rounded-lg mb-4 mt-4"
            />
            <h1 className="text-2xl font-bold text-orange-800 mb-2">
              {speaker.name}
            </h1>
            <h3 className="text-xl text-orange-600 ">{speaker.role}</h3>
            <p className="text-sm mt-1 mb-4">{speaker.country}</p>
            <p className="text-sm">{speaker.college}</p>
            <p className="text-gray-700 flex-grow mt-4">{speaker.bio}</p>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Keynote Speaker");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [speakers, setSpeakers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        // Fetch all speakers
        const records = await pb.collection('ICSTHM_speakers').getFullList({
          sort: 'name',
          expand: 'image', // Expand the image relation if needed
          requestKey: null,
        });

        // Group speakers by category
        const groupedSpeakers = records.reduce((acc, speaker) => {
          const category = speaker.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push({
            name: speaker.name,
            role: speaker.role,
            image: speaker.image,
            bio: speaker.bio,
            id: speaker.id,
            collectionId: speaker.collectionId,
            college: speaker.college,
            country: speaker.country,
          });
          return acc;
        }, {});
        //console.log(groupedSpeakers);
      
        // Ensure all categories exist in the grouped speakers object
        speakerCategories.forEach(({ id }) => {
          if (!groupedSpeakers[id]) {
            groupedSpeakers[id] = [];
          }
        });

        setSpeakers(groupedSpeakers);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching speakers:', err);
        setError('Failed to load speakers');
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsDrawerOpen(true);
  };
  console.log(selectedSpeaker);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  if (loading) {
    return (
      <div className="bg-orange-50 min-h-screen flex items-center justify-center">
        <div className="text-orange-600 text-xl">Loading speakers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-orange-50 min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-orange-50">
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center  mb-8">
          Our Speakers
        </h2>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {speakerCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-orange-100 text-orange-800 hover:bg-orange-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {speakers[activeCategory]?.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <SpeakerCard {...speaker} onMoreInfo={handleMoreInfo} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          speaker={selectedSpeaker}
        />
      </div>
    </div>
  );
}