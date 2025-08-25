"use client";
import { ProductCarouselcard } from "@/types";
import React from "react";
import ProductCarouselCard from "./ProductCarouselCard";
import Slider from "react-slick";

type Props = {
  data: ProductCarouselcard[];
  category: string;
};

function ProductCarousel({ data, category }: Props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1155,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative py-12 b  ">
      {/* Gradient Background */}
      <div
        className="absolute  -z-10"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "63px",
          opacity: 0.2,
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(200px)",
        }}
      />
      {/* Carousel Content */}
      <h2 className="text-4xl font-bold text-black mb-8 text-center">
        {category}
      </h2>
      <Slider {...settings}>
        {data.map((product, index) => (
          <div key={index} className="flex-shrink-0">
            <ProductCarouselCard
              href={product.href}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
