import Image from "next/image";
import React from "react";

const Healthier = () => {
  return (
    <div className="relative px-4 py-10  md:py-20 overflow-hidden">
      <div
        className="absolute"
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(50px)",
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      />
      {/* Background layer with opacity */}

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center text-sm md:text-lg  mb-6 font-bold">
          Confused?{" "}
          <span className="underline text-[#009245] font-medium">
            Click here to get on a free consultation call with a ParaFit
            Nutritionist{" "}
          </span>{" "}
          & choose the right goal.
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
                We are making some of the
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-green-800 via-lime-400 to-green-900 bg-clip-text text-transparent leading-tight mt-2">
                Biggest Brands Healthier
              </h1>
            </div>

            {/* Right Logos Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
                {[
                  "pwc",
                  "google",
                  "barclays",
                  "kpmg",
                  "american-express",
                  "mckinsey",
                  "tata-steel",
                  "airindia",
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="w-20 h-16 flex items-center justify-center"
                  >
                    <Image
                      src={`/assets/${logo}.png`}
                      alt={logo}
                      width={80}
                      height={40}
                      className="object-contain max-h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthier;
