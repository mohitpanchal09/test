import { TransformationCardProps } from "@/types";
import Image from "next/image";
import React from "react";

function TransformationCard({ src }: TransformationCardProps) {
  return (
    <div className="sm:h-[300px] w-[230px] md:h-[300px] md:w-[270px] mx-auto">
      <Image
        src={src}
        alt=""
        className="h-full w-full"
        height={100}
        width={100}
      />
    </div>
  );
}

export default TransformationCard;
