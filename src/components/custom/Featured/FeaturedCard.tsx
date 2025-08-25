import { FeaturedCardProps } from "@/types";
import Image from "next/image";
import React from "react";

function FeaturedCard({ logo, title, desc, avatar }: FeaturedCardProps) {
  return (
    <div className="relative flex flex-col my-10 mx-auto rounded-3xl p-3 w-[240px] h-[350px]  sm:w-[320px] sm:h-[310px] gap-y-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <Image src={logo} height={100} width={100} alt="logo" className="p-0" />
      <h1 className="font-bold text-sm">{title}</h1>
      <p className="text-xs">{desc}</p>
      <Image height={100} width={100} alt="avatar" src={avatar} className="absolute h-12 w-12 rounded-full -bottom-5 right-5"/>
    </div>
  );
}

export default FeaturedCard;
