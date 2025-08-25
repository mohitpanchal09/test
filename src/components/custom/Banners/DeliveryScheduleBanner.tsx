import { Navigation } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

function DeliveryScheduleBanner({}: Props) {
  return (
    <div
      className="flex h-fit p-10 sm:p-20 flex-col md:flex-row flex-wrap"
      style={{
        background: "linear-gradient(180deg, #02803E 0%, #001A0D 100%)",
      }}
    >
      <div className="flex-2/3 flex flex-col gap-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B8FDD9]">
          Your Delivery, Right on Schedule!
        </h1>
        <h4 className="text-2xl text-white">
          All meals are prepared freshly every morning and will be delivered
          wherever you go,
        </h4>
        <span className="text-white font-bold text-4xl">Hot & Fresh</span>
        <p className="text-[#B3FF00] flex items-center gap-x-2">
          <Navigation className="text-white fill-white border-2 border-white rounded-full h-8 w-8 p-1" />
          Serving Delhi NCR, Mumbai, Pune and Bangalore
        </p>
      </div>
      <div className="relative flex-1/3 flex justify-center">
        <div className="bg-[#B8FDD9] rounded-full h-[320px] w-[320px] overflow-hidden">
          <Image
            src={`/assets/clock.svg`}
            alt="clock"
            height={120}
            width={120}
            className="top-0 absolute"
          />
            <Image
            src="/assets/building.svg"
            alt="building"
            height={300}
            width={300}
            className="absolute top-25 left-1/2 transform -translate-x-1/2 z-0 rounded-tl-xl"
          />
          <Image
            src={`/assets/delivery-man.png`}
            alt="man"
            height={300}
            width={300}
            className="absolute z-20"
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryScheduleBanner;
