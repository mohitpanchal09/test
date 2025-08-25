import Image from "next/image";
import React from "react";
import SectionTitle from "../Titles/SectionTitle";
import { ParashopAppleCardCarousel } from "./ParashopAppleCardCarousel";

type Props = {};

function Parashop({}: Props) {
  return (
    <div className="relative">
      <div
        className="absolute -z-0"
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(50px)",
          width: "100%",
          height: "100%",
          
        }}
      />
      <div className="w-[90vw] h-[400px] bg-gray-900 mx-auto rounded-4xl my-20 z-10"></div>

      <SectionTitle name="#Parashop" />

      {/* Main Heading */}
      <h1 className="text-center font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Introducing <span className="font-semibold">ParaShop</span>
      </h1>

      {/* Subheading */}
      <h1 className="text-center font-light text-lg sm:text-xl md:text-2xl lg:text-3xl my-6 sm:my-8 md:my-10">
        Healthiest range of fortified products
      </h1>

      <ParashopAppleCardCarousel />
      <p className="text-center text-[14.718px] md:text-[26.718px]  lg:text-[36.718px] font-bold mb-20 sm:mb-0">
        Everything you need to get fit in <span className="text-[30.28px] md:text-[63.28px] lg:text-[93.28px] bg-[linear-gradient(90deg,_#03803F_0.04%,_#B3FF00_37.56%,_#055F30_72.31%)] bg-clip-text text-transparent font-bold">one app</span>
      </p>
    </div>
  );
}

export default Parashop;
