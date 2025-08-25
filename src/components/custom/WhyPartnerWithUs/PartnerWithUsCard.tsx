import { PartnerWithUsProps } from "@/types";
import React from "react";

function PartnerWithUsCard({ Icon, title, desc,number }: PartnerWithUsProps) {
  return (
    <div className="flex-1/3 max-w-[300px] relative">
      <Icon className="text-white bg-[#0B7439] h-12 w-12 p-3 rounded-2xl" />
      <h2 className="text-[#B3FF00] z-10">{title}</h2>
      <span className="text-white z-10">{desc}</span>
      <div className="absolute text-[#FFFFFF]/5 font-black text-[204px] -top-[40%]  right-0 p-0">{number}</div>
    </div>
  );
}

export default PartnerWithUsCard;
