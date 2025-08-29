// components/customized-diets/DietTypeCard.tsx
import React from "react";
import Image from "next/image";

interface DietTypeCardProps {
  highlight: string;
  src: string;
  title: string;
  subtitle: string;
}

export default function DietTypeCard({
  highlight,
  src,
  title,
  subtitle,
}: DietTypeCardProps) {
  return (
    <div className="relative w-80 h-80 mt-50">
      {/* Background shape */}
      <Image
        src="/assets/customized-diets/diet-type.svg"
        alt={title}
        fill
        style={{
          objectFit: "contain",
          transform: "scale(1.7)",
          transformOrigin: "center",
        }}
        className=""
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <span className="text-[#B3FF00]  font-semibold text-sm">
          {highlight}
        </span>
        <Image
          src={src}
          height={120}
          width={120}
          alt={title}
          className="rounded-2xl h-[130%] w-[80%] m-5"
        />
        <h3 className="text-2xl font-[700] text-white">{title}</h3>
        <p className="text-[15px] text-white ">{subtitle}</p>
      </div>
    </div>
  );
}
