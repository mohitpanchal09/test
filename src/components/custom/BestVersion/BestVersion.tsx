import React from "react";
import BestVersionCarousel from "./BestVersionCarousel";
import { data1, data2 } from "@/lib/bestVersionData";

type Props = {};

function BestVersion({}: Props) {
  return (
    <div className="py-10 lg:py-20 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 font-medium">
        Because You Deserve{" "}
        <span className="text-[#009245]">the Best Version of You.</span>
      </h1>

      {/* Background gradient blur blob */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 top-10">
        <div
          className="w-full h-10/12"
          style={{
            borderRadius: "63px",
            opacity: 0.2,
            background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
            filter: "blur(75px)",
          }}
        />
      </div>

      
      {/* Carousels */}
      <div className="relative z-10">
        <BestVersionCarousel data={data1} />
        <div className="mt-20">
          <BestVersionCarousel data={data2} />
        </div>
      </div>
    </div>
  );
}

export default BestVersion;
