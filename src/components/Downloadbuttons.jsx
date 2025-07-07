"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DownloadCloudIcon } from "lucide-react";
import { pb } from "@/lib/pocketbase";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function DownloadButtons() {
  const [downloads, setDownloads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {

        const records = await pb.collection('ICSTHM_downloads').getFullList({
          sort: 'created',
          requestKey:null
          
        });
        
        // Transform the records into the format we need
        const formattedDownloads = records.map(record => ({
          text: record.name,
          href: record.url, // Assuming you have a fileUrl field in your collection
          id: record.id
        }));
        
        setDownloads(records);
      } catch (err) {
        console.error('Error fetching downloads:', err);
        setError('Failed to load download materials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDownloads();
  }, []);

  if (error) {
    return (
      <section className="pb-12 mx-auto bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
        <div className="container max-w-7xl mx-auto px-4 text-center text-red-600">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="pb-12 mx-auto bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-center text-2xl pb-6 inline-flex justify-center items-center gap-3 font-medium text-orange-600">
            Download Conference Materials <DownloadCloudIcon />
          </h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {downloads.map((download) => (
              <motion.a
                href={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${download.collectionId}/${download.id}/${download.url}`}
                key={download.id}
                className="bg-orange-400 hover:bg-orange-500/80 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center drop-shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                d
              >
                {download.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}