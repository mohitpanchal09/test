// components/FoodMenu.tsx
import React from "react";
import Image from "next/image";

const FoodYouLove = () => {
  const images = [
    "/assets/pricing/food1.jpg",
    "/assets/pricing/food2.jpg",
    "/assets/pricing/food3.jpg",
    "/assets/pricing/food4.jpg",
  ];

  return (
    <section className="px-4 md:px-10 lg:px-20 py-10">
      {/* Top Text */}
      <p className="text-sm sm:text-base text-center mb-6">
        Confused?{" "}
        <a
          href="#"
          className="text-green-600 font-medium hover:underline"
        >
          Click here to get on a free consultation call with ParaFit Nutritionist
        </a>{" "}
        &amp; choose the right technique for you.
      </p>

      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center  md:gap-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Food You Love</h2>
        <p className="text-base sm:text-lg max-w-md text-left">
          Imagine if you could eat all this in your diet &amp; still lose weight.
        </p>
      </div>

      {/* Food Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="w-full aspect-square relative overflow-hidden rounded-tl-[59px] rounded-br-[59px]">
            <Image
              src={src}
              alt={`Food ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodYouLove;
