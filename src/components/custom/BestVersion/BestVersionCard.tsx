import { BestVersionProps } from "@/types";
import Image from "next/image";
import React from "react";

function BestVersionCard({ src }: BestVersionProps) {
  return (
    <div className="h-[220px] w-[220px] md:h-[256px] md:w-[256px] mx-auto">
      <Image src={src} alt="" className="h-full w-full" height={100} width={100}/>
    </div>
  );
}

export default BestVersionCard;
