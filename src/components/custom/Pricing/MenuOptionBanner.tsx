"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  isActive: number;
};

function MenuOptionBanner({ isActive = 1 }: Props) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap h-[60vh] md:min-h-[600px] overflow-hidden relative"
      style={{
        background: "linear-gradient(180deg, #02803E 0%, #001A0D 100%)",
      }}
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex-2/3 lg:flex-1 px-4 py-8 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center space-y-2 z-50"
      >
        <h4 className="text-4xl text-center sm:text-left sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#B3FF00] via-[#DFFF99] to-white bg-clip-text text-transparent">
          350+
        </h4>
        <h4 className="text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B3FF00] via-[#DFFF99] to-white bg-clip-text text-transparent">
          Menu Option
        </h4>
        <h4 className="text-xl text-center sm:text-left sm:text-2xl lg:text-3xl font-light text-white">
          Fresh Food Tailor made to your macros in small batches delivered daily
        </h4>
        <p className="text-3xl text-center sm:text-left text-[#B3FF00]">
          No cold storage or bulk preparation.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex-1/3 lg:flex-1 relative"
      >
       
      </motion.div>
       <Image
          src={`/assets/pricing/img1.png`}
          alt="man"
          height={100}
          width={500}
          className="absolute top-0 right-0 h-full w-auto object-cover lg:object-contain"
        />
    </div>
  );
}

export default MenuOptionBanner;
