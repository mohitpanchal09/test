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
    <div className="relative w-64 h-80 mt-20">
      {/* Background shape */}
      <Image
        src="/assets/customized-diets/diet-type.svg"
        alt={title}
        fill
        style={{
          objectFit: "contain",
          transform: "scale(1.5)",
          transformOrigin: "center",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <span className="text-[#B3FF00] mb-[20px] font-semibold text-sm">
          {highlight}
        </span>
        <Image
          src={src}
          height={120}
          width={120}
          alt={title}
          className="rounded-lg h-[80%] w-[80%]"
        />
        <h3 className="text-lg font-[700] text-white">{title}</h3>
        <p className="text-xs text-white font-[300]">{subtitle}</p>
      </div>
    </div>
  );
}
