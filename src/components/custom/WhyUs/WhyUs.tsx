"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

const images = [
  "/assets/why-us/why1.png",
  "/assets/why-us/why2.png",
  "/assets/why-us/why3.png",
  "/assets/why-us/why4.png",
  "/assets/why-us/why5.png",
  "/assets/why-us/why6.png",
];

const texts = [
  [
    { text: "India’s #1", highlight: false },
    { text: "Healthy Meal", highlight: true },
    {
      text: "Subscription with 350+ rotating dishes and zero repeats.",
      highlight: false,
    },
  ],
  [
    { text: "Choose from", highlight: false },
    { text: "High-Protein, Keto, Detox, Vegan,", highlight: true },
    { text: "and Gluten-Free plans.", highlight: false },
  ],
  [
    { text: "Freshly cooked", highlight: false },
    { text: "macro-counted meals", highlight: true },
    {
      text: "by expert chefs and dietitians every morning—no cold storage.",
      highlight: false,
    },
  ],
  [
    { text: "Enjoy", highlight: false },
    { text: "2.5x bigger portions", highlight: true },
    { text: "with hot, fresh deliveries twice a day.", highlight: false },
  ],
  [
    { text: "Customized diet plans", highlight: true },
    {
      text: "with personal guidance and regular follow-ups.",
      highlight: false,
    },
  ],
  [
    { text: "Guaranteed results", highlight: true },
    {
      text: "— Lose 5–7 kg/month with flexibility to pause meals anytime.",
      highlight: false,
    },
  ],
];

function WhyUs({}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("running");
      nextImage();
    }, 4000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className=" flex flex-col space-y-2 lg:space-y-20 mt-20 md:-mt-20 lg:mt-40 ">

      <div
        className="absolute top-[50%] -z-0 w-0 lg:w-[1299px]"
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(200px)",
          height: "509px",
          zIndex:"20"
        }}
      />
      {/* Main Background Gradient */}
      <div
        className="absolute -z-0 w-0 lg:w-[1299px]"
        style={{
          height: "509px",
          borderRadius: "63px",
          opacity: 0.2,
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(200px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      ></div>

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-between h-full
        px-6 md:px-10 lg:px-20 gap-16 py-10 lg:py-0"
      >
        {/* Left Side - Image Stack */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* Gradient Blob - Bottom Right (Green) */}
          <div
            className="absolute"
            style={{
              width: "450px",
              height: "450px",
              borderRadius: "450px",
              background: "#009245",
              filter: "blur(100px)",
              bottom: "-100px",
              right: "-100px",
              zIndex: 5,
            }}
          ></div>

          {/* Gradient Blob - Top Left (Yellow-Green) */}
          <div
            className="absolute"
            style={{
              width: "303px",
              height: "303px",
              borderRadius: "303px",
              background: "#B3FF00",
              filter: "blur(100px)",
              top: "-80px",
              left: "-80px",
              zIndex: 5,
            }}
          ></div>

          {/* Image Stack */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10">
            {images.map((src, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isActive ? "z-20 scale-105" : "z-10 scale-100 opacity-50"
                  }`}
                  style={{
                    transform: `rotate(${(index - activeIndex) * 5}deg)`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`dish-${index}`}
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <div className="absolute -bottom-15 flex gap-4 z-20">
            <button
              onClick={prevImage}
              className="p-2  text-white rounded-full  transition cursor-pointer"
              style={{
                borderRadius: "100px 0 0 100px",
                background:
                  "linear-gradient(180deg, #039C4C -88.4%, #01361A 99.68%)",
              }}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="p-2  text-white rounded-full  transition cursor-pointer"
              style={{
                borderRadius: "0 100px 100px 0",
                background:
                  "linear-gradient(180deg, #039C4C -88.4%, #01361A 99.68%)",
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-right">
          <div className="space-y-2 lg:space-y-8">
            {/* Heading */}
            <h1 className="flex lg:mb-20 items-center justify-center lg:justify-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#03803F] via-[#B3FF00] to-[#055F30] bg-clip-text text-transparent leading-tight">
              Why us{" "}
              <span className="text-6xl sm:text-7xl md:text-8xl text-transparent bg-gradient-to-b from-[#158D39] via-[#ADFA02] to-[#055F30] bg-clip-text">
                <Image
                  src={"/assets/why-us/question-mark.svg"}
                  height={50}
                  width={50}
                  alt=""
                  className="lg:ml-10"
                />
              </span>
            </h1>

            {/* Description */}
            <div className="relative h-40 flex items-center justify-center lg:justify-end ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute flex flex-row lg:flex-col flex-wrap gap-x-2 
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light 
                 lg:gap-y-2 justify-center lg:justify-start"
                >
                  {texts[activeIndex].map((item, idx) => (
                    <span
                      key={idx}
                      className={
                        item.highlight
                          ? "text-[#02803E] font-[700]"
                          : "text-gray-800 font-[500]"
                      }
                    >
                      {item.text}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="relative z-20 mx-auto">
        <Button variant="subscription" className="border-none shadow-2xl">
          Start Food Subscription
        </Button>
      </div>
    </div>
  );
}

export default WhyUs;
