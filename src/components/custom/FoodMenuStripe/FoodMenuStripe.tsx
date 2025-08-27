"use client";

import { FoodStripeProps } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function FoodMenuStripe({
  title,
  bgColor,
  rightMainImage,
  rightTopRightImage,
  rightBottomLeftImage,
  rightTopLeftImage,
  stripeHeight,
  stopSpin = false,
  titleColor,
  fontWeight,
  highlightWords,
  highlightColor,
}: FoodStripeProps) {
  return (
    <div
      className={`${bgColor} flex flex-col md:flex-row my-10 md:my-30 h-fit ${
        stripeHeight ? stripeHeight : "md:h-[300px]"
      } p-15 md:p-20 items-center relative`}
    >
      {/* LEFT TEXT */}
      <motion.div
        className="flex-1"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${titleColor} text-3xl sm:text-4xl md:text-5xl lg:text-[55px] ${fontWeight} text-center md:text-left z-20`}
        >
          {title.split(" ").map((word, i) =>
            highlightWords?.includes(
              word.replace(/[^a-zA-Z]/g, "").toLowerCase()
            ) ? (
              <span key={i} className={`${highlightColor}`}>
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex-1 relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Top Right Veggie */}
        {rightTopRightImage && (
          <motion.div
            animate={{ y: [0, -20, 0] }} // floating up and down
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 -right-20 -z-0 pointer-events-none"
          >
            <Image
              src={rightTopRightImage}
              alt="flying-vegies"
              height={500}
              width={500}
            />
          </motion.div>
        )}

        {rightTopLeftImage && (
          <motion.div
            animate={{ y: [0, -20, 0] }} // floating up and down
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 -left-20 -z-0 pointer-events-none"
          >
            <Image
              src={rightTopRightImage}
              alt="flying-vegies"
              height={500}
              width={500}
            />
          </motion.div>
        )}

        {/* Floating Bottom Left Veggie */}
        {rightBottomLeftImage && (
          <motion.div
            animate={{ y: [0, 20, 0] }} // floating down and up
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 top-[10px] -left-20 -z-0 pointer-events-none"
          >
            <Image
              src={rightBottomLeftImage}
              alt="flying-vegies"
              height={500}
              width={500}
            />
          </motion.div>
        )}

        {/* Main image with continuous rotation */}
        <motion.div
          animate={stopSpin ? {} : { rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12, // rotation speed
            ease: "linear",
          }}
          className="relative z-30 mx-auto w-fit"
        >
          <Image
            src={rightMainImage}
            alt="main"
            height={stopSpin ? 1000 : 500}
            width={stopSpin ? 1000 : 500}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FoodMenuStripe;
