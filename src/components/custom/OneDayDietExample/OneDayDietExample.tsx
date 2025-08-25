import Image from "next/image";
import React from "react";

type Props = {};

function OneDayDietExample({}: Props) {
  return (
    <div className="relative w-full h-fit md:h-[300px] flex flex-col md:flex-row items-center md:justify-between mt-20 px-6 md:px-20 mb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("/assets/stripe.svg")` }}
      />

      {/* Text Section */}
      <div className="relative z-10 text-center md:text-left max-w-full md:max-w-[50%]">
        <h2 className="text-2xl mt-20 md:mt-0 sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight text-white">
          What a <span className="text-lime-400 font-bold">one-day</span>
          <br className="hidden md:block" /> diet looks like
        </h2>
      </div>

      {/* iPhone Image */}
      <div className="relative z-10 mt-6 md:mt-0 md:pr-10">
        <Image
          src="/assets/iphone15.png"
          alt="iphone15"
          width={300}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default OneDayDietExample;
