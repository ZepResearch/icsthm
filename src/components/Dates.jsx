"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PocketBase from 'pocketbase';
import { pb } from "@/lib/pocketbase";



function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Apply line-through if index is greater than 1
  const isExpired = index > 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pb-8"
    >
      <Card className="relative flex items-center">
        <CardContent className="flex p-4">
          <div className="ml-4 flex flex-col">
            <time className={`text-sm font-semibold text-primary  ${isExpired ? "line-through text-orange-300" : ""}`}>
              {item.date}
            </time>
            <h3 className={`text-lg font-semibold ${isExpired ? "line-through text-gray-500" : ""}`}>
              {item.name}
            </h3>
            <p className={`mt-1 text-sm text-muted-foreground ${isExpired ? "line-through text-gray-400" : ""}`}>
              {item.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default function Dates() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true);
        // Fetch all records and sort them by date
        const records = await pb.collection('ICSTHM_dates').getFullList({
          sort: '-created',
          requestKey: null,
        });
        
        // Transform the records to match our timeline format
    
        setTimeline(records);
      } catch (err) {
        console.error('Error fetching dates:', err);
        setError('Failed to load timeline dates');
      } finally {
        setLoading(false);
      }
    }

    fetchDates();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Key Dates to Remember
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Stay ahead of the curve. Mark these important dates and be part of a
            transformative conference.
          </p>
        </div>

        <div className="mt-16 flex flex-col-reverse sm:flex-row justify-center items-start gap-12">
          <div className="relative inline-flex">
            <motion.div
              ref={timelineRef}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-6 top-5 -bottom-5 w-0.5 bg-primary"
              style={{ originY: 0 }}
            />
            <div className="flex flex-col-reverse ">
            {timeline.map((item, index) => (
                <TimelineItem 
                  key={item.name} 
                  item={item} 
                  index={index} 
                  isExpired={index === 0} // Pass a prop to indicate this is the first item
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-lg text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/schedule">Get Full Conference Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}