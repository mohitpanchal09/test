"use client";
import { TransformationCardProps } from "@/types";
import Slider from "react-slick";
import React from "react";
import TransformationCard from "./TransformationCard";

type Props = {
  data: TransformationCardProps[];
};

function TransformationCarousel({ data }: Props) {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 837,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 md:py-30 align-bottom">
      <Slider {...settings}>
        {data.map((item,i) => (
          <TransformationCard src={item.src} key={i}/>
        ))}
      </Slider>
    </div>
  );
}

export default TransformationCarousel;
