import React from "react";
import PartnerWithUsCard from "./PartnerWithUsCard";
import { partnerWithUsData } from "@/lib/partnerWithUsData";

type Props = {};

function WhyPartnerWithUs({}: Props) {
  return (
    <div className="flex flex-col  items-center bg-[#02381A] min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center gap-20 w-[90vw] md:w-[80vw]">
        <h1 className="text-[#B3FF00] text-3xl md:text-5xl lg:text-6xl font-bold mt-20">
          Why Partner With Us
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-20 gap-y-20">
          {partnerWithUsData.map((item, i) => (
            <PartnerWithUsCard
              title={item.title}
              desc={item.desc}
              Icon={item.Icon}
              key={i}
              number={i+1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyPartnerWithUs;
