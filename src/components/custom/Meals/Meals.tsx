"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import DietTypeButton from "./DietTypeButton";
import DataCard from "./DataCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Props = {};

const days = Array.from({ length: 7 }, (_, i) => ({
  label: `Day No. ${i + 1}`,
}));

const buttons = [
  { label: "Balanced", value: "balanced" },
  { label: "Detox", value: "detox" },
  { label: "High Protein", value: "high-protein" },
  { label: "Vegan", value: "vegan" },
  { label: "Keto", value: "keto" },
];

function Meals({}: Props) {
  return (
    <div className="flex justify-center flex-col items-center my-8 md:my-20 relative px-4">
      {/* Background Blur */}
      <div
        className="absolute top-[10%] -left-[60%] -z-10"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "63px",
          opacity: 0.8,
          background: "linear-gradient(270deg, #039C4C 0.06%, #055A2D 90.82%)",
          filter: "blur(150px)",
        }}
      />
      <div
        className="absolute top-[10%] -right-[60%] -z-10"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "63px",
          opacity: 0.8,
          background: "linear-gradient(270deg, #039C4C 0.06%, #055A2D 90.82%)",
          filter: "blur(150px)",
        }}
      />
      <div className="flex flex-col lg:flex-row  gap-4 w-[98vw] md:w-[97vw] lg:w-[90vw] bg-white rounded-2xl lg:rounded-4xl p-4 md:p-4 lg:p-8 overflow-hidden">
        <div className="flex-1/5 flex flex-col space-y-4">
          <div className="flex items-center justify-center ">
            <Button className="bg-[#017438] h-12 md:h-16 w-full max-w-sm lg:max-w-none text-[24px] text-[#B3FF00] rounded-xl cursor-pointer hover:bg-[#3BA324] hover:text-white">
              Select Meal
            </Button>
          </div>
          <div className="hidden  md:flex items-center justify-center ">
            <p className="text-center font-extrabold text-[#3BA324] text-lg">
              Plan Your Plate Through the Day
            </p>
          </div>
          <div className="rounded-xl  bg-white relative p-2 md:p-4 lg:p-8  overflow-hidden flex flex-col items-center justify-center gap-4">
            <div className="absolute top-0 left-0 w-[120px] md:w-[183px] h-[50%] bg-[#B3FF00] blur-[20px] md:blur-[30px] pointer-events-none" />
            <div className="absolute top-0 -right-10 w-[100px] md:w-[147px] h-[40%] bg-[#3BA324] blur-[20px] md:blur-[30px] pointer-events-none" />
            <div className="absolute bottom-0 -left-10 w-[120px] md:w-[183px] h-[100px] md:h-[164px] bg-[#0BB75D] blur-[20px] md:blur-[30px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[120px] md:w-[183px] h-[100px] md:h-[164px] bg-[#B3FF00] blur-[20px] md:blur-[30px] pointer-events-none" />

            {buttons.map((item, index) => (
              <Button
                key={index}
                className="rounded-full text-[#017438]  border-[0.5px] border-black w-full h-10 md:h-[50px] z-20 text-base md:text-xl font-light bg-white cursor-pointer hover:bg-[#3BA324] hover:text-white"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-4/5 flex flex-col space-y-4">
          {/* Day selection */}
          <div className="flex flex-row items-center h-12 md:h-16 w-full justify-between bg-[#017438] rounded-xl py-2 px-2 md:px-0 md:py-0">
            <span className="text-[#B3FF00] text-center hidden md:block font-medium text-[19px] flex-1/8">
              Select Day
            </span>

            <div className="border border-l h-[70%] border-[#0B8C49]" />
            {/* Desktop buttons */}
            <ScrollArea className="flex-7/8 rounded-md  whitespace-nowrap border-0 overflow-hidden">
              <div className="flex justify-evenly gap-1">
                {days.map((item, i) => (
                  <Button
                    key={i}
                    className="rounded-full bg-[#0B8C49] cursor-pointer hover:bg-[#B3FF00] hover:text-[#0B8C49] text-sm  py-2 w-fit"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="w-full gap-2 overflow-hidden">
            <div className="flex">
              <ScrollArea className="w-full overflow-hidden">
                <div className="flex h-fit">
                  <div className="flex flex-col">
                    <DietTypeButton className="z-40 text-sm md:text-base my-4">
                      Breakfast
                    </DietTypeButton>
                    <DataCard />
                  </div>
                  <div className="flex flex-col">
                    <DietTypeButton className="text-sm md:text-base my-4">
                      Lunch
                    </DietTypeButton>
                    <DataCard />
                  </div>
                  <div className="flex flex-col">
                    <DietTypeButton className="z-40 text-sm md:text-base my-4">
                      Snack
                    </DietTypeButton>
                    <DataCard />
                  </div>
                  <div className="flex flex-col">
                    <DietTypeButton className="text-sm md:text-base my-4">
                      Dinner
                    </DietTypeButton>
                    <DataCard />
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
