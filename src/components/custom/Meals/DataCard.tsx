import Image from "next/image";
import React from "react";

type Props = {};

function DataCard({}: Props) {
  return (
    <div className="p-4 flex-1 h-full w-[240px] text-[12px] bg-[#D8EDD3] rounded-lg mx-1 flex flex-col pb-10">
      <Image
        alt=""
        height={100}
        width={100}
        src={"/assets/pricing/food1.jpg"}
        className="w-full object-cover rounded-md"
      />
      <h1 className="text-lg mt-2">BBQ Chicken Sandwich</h1>
      <p className="text-[12px] mt-1">
        Juicy chicken thigh pieces pan roasted with barbecue sauce, parsley,
        basil, and garlic nestled between lettuce in whole wheat bread. Served
        with yogurt-based barbecue dip.
      </p>
    </div>
  );
}

export default DataCard;
