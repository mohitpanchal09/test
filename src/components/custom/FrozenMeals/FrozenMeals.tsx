import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function FrozenMeals({}: Props) {
  return (
    <div className="bg-[#039C4C] px-8 pt-10 md:py-16 md:px-16 lg:px-20 relative sm:mt-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl mb-8 font-medium text-center md:text-left w-full z-50">
              Why eat{" "}
              <span className="text-yellow-300 font-medium">frozen meals </span>
              delivered together in
              <br />
              the morning?
            </h1>

            <p className="text-xl md:text-xl lg:text-2xl font-light mb-8 opacity-90 text-center md:text-left z-50">
              Hot, fresh dinners now delivered in the evening separately
            </p>

            <Link href={'/delivery-schedule'}>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-green-600 transition-all duration-300 z-50">
                See our delivery schedule
              </button>
            </Link>
          </div>

          {/* Right Content - Delivery Person */}
          <div className="flex justify-center lg:justify-end">
            <div className="sm:absolute right-10 bottom-0 z-10">
              <Image
                src="/assets/frozen-meals/man-holding-delivery.svg"
                alt="Delivery person holding package"
                className="h-80 md:h-full w-80 md:w-full"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
