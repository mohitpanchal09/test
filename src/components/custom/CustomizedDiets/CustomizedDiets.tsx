"use client";
import React from "react";
import DietTypes from "./DietTypes";
import VegNonVegSection from "./NonVegSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomizedDiets() {
  return (
    <div
      className="w-full py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/customized-diets/gradient.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cabbage Floating Animation */}
      <motion.div
        className="absolute top-[40%] left-[10%]"
       initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -50, 0] }}
        transition={{
          x: { type: "spring", stiffness: 60, damping: 15, duration: 1.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1 },
        }}
      >
        <Image
          src="/assets/customized-diets/cabbage.svg"
          alt="cabbage"
          height={200}
          width={200}
        />
      </motion.div>

      {/* Avocado Slide-in + Floating */}
      <motion.div
        className="absolute right-10 mt-5"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -15, 0] }}
        transition={{
          x: { type: "spring", stiffness: 60, damping: 15, duration: 1.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1 },
        }}
      >
        <Image
          src="/assets/customized-diets/avacado.svg"
          alt="avocado"
          height={200}
          width={200}
        />
      </motion.div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#A4E100]">Customised Diets</span>{" "}
          <span className="text-white">for every body type</span>
        </h2>
      </div>

      <DietTypes />
      <VegNonVegSection />

      {/* Button */}
      <div className="text-center mt-8">
        <button className="bg-white text-green-600 px-6 py-3 rounded-2xl font-semibold hover:bg-green-100 hover:text-black cursor-pointer transition">
          View Full Menu
        </button>
      </div>
    </div>
  );
}
