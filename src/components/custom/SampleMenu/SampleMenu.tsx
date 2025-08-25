"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../Titles/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function SampleMenu({}: Props) {
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noteRef.current) {
      gsap.fromTo(
        noteRef.current,
        {
          y: -200, // start above
          rotate: 80, // extreme tilt start
          opacity: 0,
        },
        {
          y: 0, // land in place
          rotate: -18, // final tilt
          opacity: 1,
          duration: 2.4,
          ease: "bounce.out", // bounce effect
          scrollTrigger: {
            trigger: noteRef.current,
            start: "top 80%",
          },
        }
      );

      // subtle paper-like bounce after landing
      gsap.to(noteRef.current, {
        y: -10,
        duration: 0.15,
        delay: 2.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1,
      });
    }
  }, []);

  return (
    <div className="py-8 lg:py-16">
      <SectionTitle name="#SampleMenu" />
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[70vw] xl:w-[60vw] max-w-6xl mx-auto my-10 lg:my-20 mt-40 md:mt-20">
        {/* Left Column */}
        <div className="flex flex-col bg-[#024A24] rounded-2xl lg:rounded-3xl p-2 gap-4 min-h-[350px] sm:min-h-[380px] lg:h-[320px] xl:h-[350px] self-end relative w-[326.223px] mx-auto ">
          {/* Tilted Note */}
          <div className="flex-1 relative">
            <div
              ref={noteRef}
              className="rotate-[-18deg] absolute w-full bg-[#055F30] text-white rounded-xl p-3 sm:p-4 shadow-lg border-2 sm:border-4 border-white z-10 h-fit -bottom-8 sm:-bottom-10 lg:-bottom-5 pb-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-[#12E075] text-black text-xs px-2 py-1 rounded-full font-bold w-fit mx-auto mb-2">
                NOTE
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-medium text-center">
                This is just a{" "}
                <span className="text-[#12E175] font-semibold">
                  7 days sample menu
                </span>
                , your menu will be totally customised from over{" "}
                <span className="text-[#12E175] font-semibold">
                  350+ options
                </span>{" "}
                as per the diet designed for you by the{" "}
                <span className="text-[#12E175] font-semibold">dietician</span>{" "}
                assigned keeping in mind your allergies, fitness goals, medical
                conditions and health parameters.
              </p>
            </div>
          </div>

          {/* Logo Box */}
          <div className="flex items-center justify-center bg-white rounded-xl lg:rounded-2xl p-2 shadow-md flex-1 z-20 min-h-[100px] sm:min-h-[120px] relative">
            <div
              className="h-[92%] w-[95%] flex items-center justify-center absolute rounded-xl lg:rounded-2xl"
              style={{
                border: "3.585px dashed #C3F5DC",
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={100}
                height={50}
                className="w-20 h-10 sm:w-24 sm:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col bg-[#60C44B] rounded-[76.399px] self-end relative w-[326.223px] lg:w-[417.201px] mx-auto overflow-hidden">
          <div
            className="absolute top-0 right-0"
            style={{
              width: "187.74px",
              height: "257.176px",
              borderRadius: "457.176px",
              background: "#299412",
              filter: "blur(25px)",
              zIndex: 0,
            }}
          />
           <div
            className="absolute bottom-0 left-0"
            style={{
              width: "187.74px",
              height: "257.176px",
              borderRadius: "457.176px",
              background: "#299412",
              filter: "blur(25px)",
              zIndex: 0,
            }}
          />
          <Image
            src={"/assets/food-menu/tape.svg"}
            height={100}
            width={100}
            alt="tape"
            className="absolute w-full"
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/assets/food-menu/girl.png"
              alt="dietician"
              width={324}
              height={557}
              className="object-contain w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] max-h-[350px] sm:max-h-[450px] lg:max-h-[550px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleMenu;
