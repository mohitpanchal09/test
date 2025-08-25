import Image from "next/image";
import React from "react";

type Props = {
  svg: string;
  title: string;
  price: string;
  className?: string;
};

function PlanCard({ svg, title, price, className }: Props) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      {/* Top Card Section */}
      <div className="relative flex flex-col items-center justify-center text-center  rounded-[33px] bg-gradient-to-t from-[#07C561] to-[#07C561]/0 w-[357px] h-[350px] shadow-lg">
        <Image
          src={svg}
          height={100}
          width={100}
          alt="svg"
          className={`h-full w-full object-contain absolute ${className ?? "bottom-0"}`}
        />
      </div>

      {/* Text Section with fixed height */}
      <div className="w-[350px] h-[80px] flex flex-col   px-4">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-md">{price}</p>
      </div>
    </div>
  );
}

export default PlanCard;
