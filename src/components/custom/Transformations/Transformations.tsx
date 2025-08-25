"use client";
import React from "react";
import SectionTitle from "../Titles/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import ThreedCarousel from "../ThreedCarousel.tsx/ThreedCarousel";

type Props = {
  title?: string;
};

function Transformations({ title = "#Results" }: Props) {
  return (
    <div className="my-20 relative">
      <div
        className="absolute top-[50%] "
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(200px)",
          width: "1299px",
          height: "509px",
        }}
      />
      <SectionTitle name={title} />
      <div className="w-[95vw] md:w-[80vw] mx-auto relative overflow-hidden rounded-4xl bg-green-600 py-10">
        {/* Gradient Blurs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-200px",
            width: "1287.596px",
            height: "434.525px",
            borderRadius: "1287.596px",
            background: "#02803E",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0",
            width: "391.168px",
            height: "418.128px",
            borderRadius: "418.128px",
            background: "#0BB75D",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "258.861px",
            height: "275.677px",
            borderRadius: "275.677px",
            background: "#0BB75D",
            filter: "blur(100px)",
            zIndex: 0,
            bottom: "10px",
            right: "10px",
          }}
        />

        {/* Animated Broccoli */}
        <motion.div
          className="absolute top-[-30px] right-0 md:top-[10px] md:right-20"
          animate={{
            y: [0, -15, 0], // floating effect
            rotate: [0, 2, -2, 0], // subtle tilt
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={`/assets/transformations/brocalli.svg`}
            height={200}
            width={200}
            alt="broccoli"
          />
        </motion.div>

        {/* Animated Mushroom */}
        <motion.div
          className="absolute bottom-[-40px] md:bottom-[5px] left-10"
          animate={{
            y: [0, 20, 0], // bounce float
            rotate: [0, -3, 3, 0], // rocking
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={`/assets/transformations/mashroom.svg`}
            height={200}
            width={200}
            alt="mushroom"
          />
        </motion.div>

        {/* Carousel */}
        <div className="center relative z-10">
          <ThreedCarousel />
        </div>
      </div>
    </div>
  );
}

export default Transformations;
