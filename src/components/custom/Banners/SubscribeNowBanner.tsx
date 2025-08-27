"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  isActive?: number;
};

function SubscribeNowBanner({ isActive = 1 }: Props) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap h-[80vh] md:min-h-[600px] overflow-hidden relative"
      style={{
        background: "linear-gradient(180deg, #02803E 0%, #001A0D 100%)",
      }}
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex-2/3 lg:flex-1 px-4 py-8 sm:px-10 z-50 md:px-16 lg:px-20 flex flex-col justify-center space-y-2"
      >
        <h4 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#B3FF00] via-[#DFFF99] to-white bg-clip-text text-transparent">
          Imagine
        </h4>
        <h4 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white">
          If you could eat this <br /> and{" "}
          <span className="font-bold">achieve</span> your <br />
        </h4>
        <h4 className="text-4xl sm:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-[#B3FF00] via-[#DFFF99] to-white bg-clip-text text-transparent">
          dream fitness goals
        </h4>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex-1/3 lg:flex-1  z-10"
      >
        <Image
          src={`/assets/subscribe-now/dish-in-hand.svg`}
          alt="man"
          height={500}
          width={1000}
          className="absolute bottom-0 right-0 h-auto max-w-[600px] object-contain z-30"
        />
      </motion.div>
      <Image
        src={`/assets/subscribe-now/stripe2.svg`}
        alt="man"
        height={100}
        width={100}
        className="absolute top-0 right-0 h-full w-auto object-cover lg:object-contain"
      />
    </div>
  );
}

export default SubscribeNowBanner;
