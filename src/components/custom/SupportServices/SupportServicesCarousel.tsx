"use client";
import React from "react";
import Slider from "react-slick";
import SupportServiceCard from "./SupportServiceCard";
import { supportServicesData } from "@/lib/supportServicesData";
function SupportServicesCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {supportServicesData.map((item, i) => (
          <SupportServiceCard
            title={item.title}
            desc={item.desc}
            Icon={item.Icon}
            key={i}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SupportServicesCarousel;
