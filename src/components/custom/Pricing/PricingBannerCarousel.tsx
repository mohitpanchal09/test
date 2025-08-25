"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import SubscribeNowBanner from "../Banners/SubscribeNowBanner";
import MenuOptionBanner from "./MenuOptionBanner";

function PricingBannerCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        <div>
          <MenuOptionBanner isActive={activeSlide === 0 ? 1 : 0} />
        </div>
        <div>
          <SubscribeNowBanner isActive={activeSlide === 1 ? 1 : 0} />
        </div>
      </Slider>
    </div>
  );
}

export default PricingBannerCarousel;
