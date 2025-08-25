"use client";

import React, { useState, useEffect } from "react";
import { FoodStripeProps } from "@/types";
import FoodMenuStripe from "./FoodMenuStripe";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  data: FoodStripeProps[];
};

function FoodMenuStripeCarousel({ data }: Props) {
  const [index, setIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000); // Change slide every 4s
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          transition={{ duration: 0.8 }}
        >
          <FoodMenuStripe {...data[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FoodMenuStripeCarousel;
