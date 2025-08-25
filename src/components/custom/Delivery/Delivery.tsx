"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SectionTitle from "../Titles/SectionTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Delivery({}: Props) {
  const scooterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!scooterRef.current) return;

    gsap.fromTo(
      scooterRef.current,
      { x: "-100%" }, // start completely left
      {
        x: "100%", // move completely to the right
        ease: "power1.out",
        scrollTrigger: {
          trigger: scooterRef.current,
          start: "top bottom", // starts when scooter enters viewport
          end: "bottom top", // ends when it leaves
          scrub: true, // smooth scrubbing
        },
      }
    );
  }, []);

  return (
    <div className="h-[70vh] md:h-[80vh] pt-2 mb-20 sm:mb-30 md:mb-40 ">
      <SectionTitle name="#Delivery" />
      <p className="text-center font-medium text-lg mb-6">
        <span className="text-[#02803E]">350+ </span>menu options.{" "}
        <span className="text-[#02803E]">Fresh</span> not frozen.{" "}
        <span className="text-[#02803E]">No</span> repeats.{" "}
      </p>

      {/* Container for stripe and scooter */}
      <div className="relative w-full h-full">
        {/* Stripe Image */}
        <Image
          src={`/assets/delivery-boy/stripe.svg`}
          alt="stripe"
          height={500}
          width={300}
          className="w-full h-auto"
        />

        {/* Scooter Image */}
        <Image
          ref={scooterRef}
          src={`/assets/delivery-boy/scooter-boy.svg`}
          alt="scooter"
          height={200}
          width={200}
          className="absolute left-0 top-[0%] lg:top-[10%] h-auto w-auto"
        />
      </div>
    </div>
  );
}

export default Delivery;
