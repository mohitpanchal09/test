"use client";
import React from "react";
import Image from "next/image";

const FaqSection = () => {
  return (
    <section className="relative z-10 my-10 md:my-14 mx-5 lg:mx-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 rounded-[63px] blur-[50px] opacity-20 z-0"
        style={{
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl mb-10 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-green-800 via-lime-400 to-green-900 bg-clip-text text-transparent leading-tight mt-2">
          #Faqs
        </h1>

        <div className="w-full mx-auto rounded-[40px] bg-gradient-to-br from-[#009245] via-[#00c853] to-[#a1c935] px-6 py-12 md:py-12 md:px-12 flex flex-col md:flex-row items-center text-white">
          {/* Left side - Illustration */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/faqs/maneating.png"
                alt="Man eating healthy"
                width={200}
                height={200}
                className="hidden md:block"
              />
            </div>

            <Image
              src="/assets/faqs/woman-thinking.png"
              alt="Woman thinking"
              width={300}
              height={300}
              className="self-center"
            />
          </div>

          {/* Right side - Text content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left leading-snug">
              You have questions <br className="hidden md:block" />& we got the
              answers!
            </h2>
            <p className="mt-4 text-white text-lg md:text-2xl text-center md:text-left">
              Achieve your fitness goals fast with tasty meals delivered to your
              doorstep—just eat, relax, and let us do the rest.
            </p>
            <button className="mt-6 px-13 text-2xl py-3 cursor-pointer bg-white text-[#0BB75D] font-semibold rounded-xl hover:bg-[#0BB75D] hover:text-white transition">
              More Faqs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
