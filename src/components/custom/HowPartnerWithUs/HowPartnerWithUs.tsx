import { featuresData } from "@/lib/featuresData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function HowPartnerWithUs() {
  return (
    <div className="relative flex flex-col items-center px-6 sm:px-10 py-10">
      {/* Gradient Background */}
      <div
        className="absolute"
        style={{
          width: "1299px",
          height: "255px",
          borderRadius: "63px",
          opacity: 0.2,
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(200px)",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1,
        }}
      />

      <button className="h-10 bg-[#389B65] mb-8 sm:mb-12 px-4 text-white font-bold rounded-full">
        Download Food Menu
      </button>

      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            How can you partner with us
          </h2>
          <p className="text-[#389B65] text-lg sm:text-xl lg:text-2xl">
            Solutions Tailored for You
          </p>
          <Link
            href={"/partner-with-us"}
            className="h-10 bg-[#389B65] px-4 w-fit text-white font-bold rounded-full flex items-center gap-1"
          >
            Partner With Us <ChevronRight size={18} />
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2">
          {featuresData.map((feature, idx) => {
            const isRightCol = idx % 2 === 1; // second column
            const isLastRow = idx >= featuresData.length - 2; // last row in desktop

            return (
              <div
                key={idx}
                className={`
          flex gap-4 items-start p-6
          ${isRightCol ? "md:border-l md:border-gray-300" : ""}
          ${!isLastRow ? "md:border-b md:border-gray-300" : ""}
        `}
              >
                <feature.icon className="bg-[#389B65] text-white h-12 w-12 p-2.5 rounded-sm shrink-0" />
                <p className="text-sm sm:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowPartnerWithUs;
