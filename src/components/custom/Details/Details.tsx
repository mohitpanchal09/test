"use client";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Details() {
  const veggieRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (veggieRef.current) {
      gsap.to(veggieRef.current, {
        y: -50, // float up
        duration: 2,
        repeat: -1, // infinite
        yoyo: true, // go back down
        ease: "power1.inOut", // smooth easing
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between pt-20 lg:pt-60 px-4 lg:px-10 gap-10">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-30 items-center">
        <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-[53.51px] leading-snug text-center lg:text-left">
          Achieving your <span className="font-bold">dream fitness goals</span>{" "}
          has never been this easy
        </h1>

        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex items-end relative gap-2 sm:gap-4">
            <div className="flex-1/2 flex sm:w-[267.97px] flex-col justify-end h-full">
              <div className="absolute -top-20 sm:-top-9">
                <button className="rotate-[-45deg] border-2 border-black rounded-full py-1 px-2 m-2 text-xs sm:text-sm md:text-base">
                  Nutrition
                </button>
                <button className="rotate-[45deg] bg-black text-white rounded-full py-1 px-2 m-2 text-xs sm:text-sm md:text-base">
                  Results
                </button>
                <button className="h-[33.82px] w-[33.82px] rounded-full bg-[#02803E] opacity-30"></button>
                <br />
                <button className="border-2 border-black bg-white py-1 px-2 rounded-full text-xs sm:text-sm md:text-base">
                  Goals
                </button>
                <button className="h-[33.82px] w-[33.82px] rounded-full bg-black"></button>
                <button className="rotate-[30deg] rounded-full py-1 px-2 border-2 border-[#02803E] z-50 bg-white text-xs sm:text-sm md:text-base">
                  Fresh Meals
                </button>
              </div>

              <Card className="sm:w-[267.97px] self-baseline bg-[#027438] p-6 text-white rounded-2xl sm:rounded-4xl sm:h-[156.1px]">
                <CardTitle className="font-medium text-sm sm:text-base md:text-lg leading-snug">
                  Choose your fitness goal and sign up
                </CardTitle>
              </Card>
            </div>

            <Card className="flex-1/2 sm:w-[267.97px] bg-[#02803E] p-6 text-white rounded-2xl sm:rounded-4xl h-[150px] sm:h-[253px] -z-10">
              <CardTitle className="font-medium text-sm sm:text-base md:text-lg leading-snug">
                Fresh breakfast, lunch, snacks & dinner delivered to your
                doorstep daily.
              </CardTitle>
            </Card>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4">
            <Card className="flex-1 sm:w-[267.97px] bg-[#038E45] p-6 text-white rounded-2xl sm:rounded-4xl sm:min-h-[150px]">
              <CardTitle className="font-medium text-sm sm:text-base md:text-lg leading-snug">
                Customise your meals & diet with your assigned ParaFit dietitian
              </CardTitle>
            </Card>
            <Card className="flex-1 sm:w-[267.97px] bg-[#039C4C] p-6 text-white rounded-2xl sm:rounded-4xl sm:min-h-[150px]">
              <CardTitle className="font-medium text-sm sm:text-base md:text-lg leading-snug">
                Get ongoing support, follow-ups, and motivation for guaranteed
                results.
              </CardTitle>
            </Card>
          </div>
        </div>
      </div>

      {/* Right Column — Veggie Float */}
      <div className="flex-1 flex items-center justify-center relative">
        <Image
          alt=""
          height={100}
          width={100}
          ref={veggieRef}
          className="h-[100%] w-[100%] absolute left-0 -top-[30%]"
          src={"/assets/home-page-banner/veggie3.svg"}
        />
        {/* <div className="flex justify-end z-10 absolute right-0 ">
                <Image src={'/assets/why-us/utensils.svg'} alt="" height={100} width={100} className="z-10 w-[400px]"/>
              </div> */}
      </div>
    </div>
  );
}

export default Details;
