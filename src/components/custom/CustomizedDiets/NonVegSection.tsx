"use client";
import React from "react";
import Image from "next/image";
import DietCard from "./DietCard";
import { cards } from "@/lib/dietData";
import { Button } from "@/components/ui/button";

export default function VegNonVegSection() {
  const [selected, setSelected] = React.useState<"veg" | "non-veg">("veg");
  return (
    <div className="relative w-full mt-60 flex flex-col items-center">
      {/* Desktop */}
      <div className="relative w-[95%] max-w-6xl hidden lg:block">
        <Image
          src="/assets/customized-diets/veg-nonveg-container.svg"
          alt="Veg & Non-Veg Menu"
          width={1200}
          height={600}
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 flex flex-col px-4 sm:px-8 py-6">
          <div className="flex justify-between items-center w-full mb-6 sm:mb-10">
            <div className="flex-1 text-white text-xl sm:text-3xl font-bold h-16 flex items-center justify-between bg-white/10 rounded-lg  border-[0.5px] border-white mr-20">
              <Button
                className={`cursor-pointer text-lg min-w-[200px] text-center text-white mx-auto h-12 w-fit p-2 rounded-lg  flex items-center ${selected=="veg" ? "border":""}`}
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                }}
                onClick={() => setSelected("veg")}
              >
                Veg
              </Button>
              <Button
                className={`flex-1 cursor-pointer text-lg max-w-[200px] text-center text-white mx-auto h-12 w-fit p-2 rounded-lg  flex items-center ${selected=="non-veg" ? "border":""}`}
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                }}
                onClick={() => setSelected("non-veg")}
              >
                Non-Veg
              </Button>
            </div>
            <div className="flex-1 text-white text-xl sm:text-3xl font-bold flex items-center justify-center"></div>
          </div>
          <div className="flex flex-row justify-center gap-4 sm:gap-6 mt-auto">
            {cards.map((card, idx) => (
              <DietCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden w-[95%] bg-gradient-to-b from-[#B3FF00]/20 via-[#009245]/20 to-[#034824]/20 rounded-3xl border border-white/20 backdrop-blur-md p-4 space-y-4">
        {cards.map((card, idx) => (
          <DietCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
