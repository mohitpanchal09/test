import { SupportService } from "@/types";
import React from "react";

function SupportServiceCard({ Icon, title, desc }: SupportService) {
  return (
    <div className="w-[250px] h-[250px] shadow-lg rounded-sm flex flex-col items-center justify-center p-4 gap-4 mx-auto my-10">
      <Icon className="bg-[#389B65] text-white h-12 w-12 p-2.5 rounded-sm shrink-0"/>
      <h2 className="font-semibold">{title}</h2>
      <span className="text-center text-sm">{desc}</span>
    </div>
  );
}

export default SupportServiceCard;
