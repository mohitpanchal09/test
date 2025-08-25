import React from "react";
import { Navigation } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Props = {};

function TransformationBanner({}: Props) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap h-fit md:min-h-[600px] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #02803E 0%, #001A0D 100%)",
      }}
    >
      {/* Left Text Section */}
      <div className="flex-1 px-4 py-8 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#F1FFD3]">
          From Day One to Day Done
        </h1>

        <h4 className="text-3xl sm:text-5xl lg:text-6xl font-medium bg-gradient-to-r from-[#B3FF00] via-[#DFFF99] to-white bg-clip-text text-transparent">
          Real Stories,
          <br />
          Real Results
        </h4>

        <div>
          <p className="gradient-text text-xl sm:text-2xl font-bold">50,000+</p>
          <p className="gradient-text text-base sm:text-xl font-medium">
            Transformations Across India
          </p>
          <div className="w-[300px]">
            <Separator className="my-1" />
          </div>
        </div>

        <div>
          <p className="gradient-text text-2xl sm:text-3xl font-medium">
            Custom Meal Plans
          </p>
          <p className="gradient-text text-base sm:text-xl font-medium">
            Tailored to Your Macros
          </p>
          <div className="w-[300px]">
            <Separator className="my-1" />
          </div>
        </div>

        <div>
          <p className="gradient-text text-2xl sm:text-3xl font-medium">
            Weekly Progress
          </p>
          <p className="text-white text-base sm:text-xl font-medium">
            Tracking & Support
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="relative flex-1 flex justify-center items-center  h-full md:min-h-[600px] rounded-t-[804px] md:rounded-l-[804px]"
        style={{
          background: "linear-gradient(180deg, #02803E 0%, #001A0D 100%)",
        }}
      >
        <div className="absolute w-full  md:h-[850px]  bg-[#003D1F] opacity-90 z-0 right-0 rounded-t-[804px] md:rounded-t-none md:rounded-l-[804px]" />

        <Image
          src={`/assets/transformations/men.svg`}
          alt="man"
          height={500}
          width={500}
          className="md:absolute bottom-0 z-20 px-5 md:px-0"
        />
      </div>
    </div>
  );
}

export default TransformationBanner;
