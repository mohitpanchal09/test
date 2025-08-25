"use client"
import { BestVersionProps } from "@/types";
import React from "react";
import Slider from "react-slick";
import BestVersionCard from "./BestVersionCard";

function BestVersionCarousel({ data }: { data: BestVersionProps[] }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0, // no delay between transitions
    speed: 4000, // how fast it scrolls
    cssEase: "linear", // smooth continuous scroll
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <BestVersionCard key={index} src={item.src} />
      ))}
    </Slider>
  );
}

export default BestVersionCarousel;
