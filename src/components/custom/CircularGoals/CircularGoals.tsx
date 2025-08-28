"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

function CircularGoals({}: Props) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust multiplier (0.2) to control spin speed
      setRotation(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center lg:flex-row min-h-[90vh] sm:min-h-[130vh] lg:min-h-[120vh] overflow-hidden relative"
      style={{
        backgroundImage: "url('/assets/circular-goals/gradient.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 relative top-[200px] sm:top-0 w-full flex flex-col items-center lg:items-end p-6 lg:justify-center text-center lg:text-right">
        <p className="text-3xl md:text-4xl lg:text-[46.585px] text-center lg:text-right text-black xl:text-white">
          Meals tailored to <br />
          <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            achieve your
          </span>
        </p>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute flex w-full  gap-x-[30%] left-[5%] md:left-0 top-[37%] md:top-[25%]  text-[130px] sm:text-[200px] md:text-[220px] lg:text-[240px] xl:text-[258px]  text-white">
          <p>G</p> <p>als</p>
        </div>
        <div
          className="relative left-[30%]"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s linear", // smooth spin
          }}
        >
          <Image
            src={"/assets/circular-goals/circular.svg"}
            height={820}
            width={820}
            className="h-[820px] w-[820px]"
            alt="circular spinning graphic"
            
          />
        </div>
      </div>
    </div>
  );
}

export default CircularGoals;
