"use client";
import React from "react";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import { featuredCardData } from "@/lib/featuredCardData";
import SectionTitle from "../Titles/SectionTitle";
const FeaturedCarousel: React.FC = () => {
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
        breakpoint: 1094,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <div
        className="absolute -z-0"
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(50px)",
          width: "100%",
          height: "100%",
        }}
      />
      <SectionTitle name="#Featured" />
      <div className="slider-container">
        <Slider {...settings}>
          {featuredCardData.map((item, i) => (
            <FeaturedCard
              title={item.title}
              desc={item.desc}
              logo={item.logo}
              avatar={item.avatar}
              key={i}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
