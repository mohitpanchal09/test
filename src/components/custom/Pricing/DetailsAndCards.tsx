import React from "react";
import Image from "next/image";
import SectionTitle from "../Titles/SectionTitle";
import { Button } from "@/components/ui/button";

type Props = {};

const DetailsAndCards = ({}: Props) => {
  return (
    <section className="flex flex-col items-center text-center py-10">
      {/* Top Text */}
      <p className="text-[#009245] text-lg sm:text-xl font-[400] m-2">
        “Let’s make your dream fitness goals a reality”
      </p>
      <h2 className="text-2xl sm:text-3xl font-medium m-2">
        Healthy, Tasty & Customized Meals Delivered all over{" "}
      </h2>

      <SectionTitle name="Delhi NCR, Bengaluru & Mumbai" />

      {/* Button */}
      <Button variant={"subscription"}>Start Food Subscription</Button>

      {/* Rectangle Container */}
      <div className="relative w-full mt-10">
        {/* Rectangle Background full width */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/pricing/rectangle.svg"
            alt="Rectangle Background"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Cards */}
<div className="relative flex flex-col sm:flex-row justify-center items-center px-6 sm:px-12 py-10 gap-6 sm:gap-0">
          {/* Define the gradient once */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="cardGradient"
                x1="355.549"
                y1="416.995"
                x2="350.749"
                y2="182.416"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02803E" />
                <stop offset="1" stopColor="#0D442F" />
              </linearGradient>
            </defs>
          </svg>

          {[
            { label: "We Plan" },
            { label: "We Cook" },
            { label: "We Deliver" },
            { label: "We Transform" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex mx-10 flex-col items-center justify-center rounded-lg p-4 sm:p-6 w-full sm:w-48 text-white shadow-lg"
              style={{
                background: "url(#cardGradient)",
                backgroundImage: "linear-gradient(#02803E, #0D442F)", // fallback
              }}
            >
              <Image
                src="/assets/pricing/tableware.svg"
                alt={item.label}
                width={40}
                height={40}
                className="mb-3"
              />
              <span className="text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsAndCards;
