"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BannerCarouselProps } from "@/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom arrow components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 z-10"
  >
    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 z-10"
  >
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  banners,
  autoPlay = true,
  autoPlaySpeed = 2000,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="relative w-full h-[90vh] md:min-h-[600px] overflow-hidden banner-carousel">
      
      <style jsx>{`
        .banner-carousel .slick-dots {
          bottom: 24px;
          z-index: 10;
        }
        .banner-carousel .slick-dots li {
          margin: 0 6px;
        }
        .banner-carousel .slick-dots li div {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
        .banner-carousel .slick-dots li.slick-active div {
          background-color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .banner-carousel .slick-dots li:hover div {
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.05);
        }
      `}</style>

      <Slider {...settings}>
        {banners.map((banner, index) => {
          const isActive = index === activeSlide;
          return (
            <div key={banner.id}>
              <div
                className={`w-full h-fit py-10 md:h-[600px] lg:h-[700px] ${banner.backgroundColor}`}
              >
                <div className="container mx-auto px-6 h-full">
                  <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-12">
                    {/* Text Content with motion */}
                    <motion.div
                      className="flex-1 max-w-xl text-center lg:text-left"
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        isActive
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -100 }
                      }
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <h1
                        className={`text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold ${
                          banner.textColor || "text-white"
                        } leading-tight mb-4 lg:mb-6`}
                      >
                        {banner.title}
                      </h1>
                      <p
                        className={`text-base md:text-lg lg:text-xl ${
                          banner.textColor || "text-white"
                        } opacity-90 mb-6 lg:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0`}
                      >
                        {banner.subtitle}
                      </p>
                      <Button
                        className={`${banner.btnBg} min-w-[200px] h-12`}
                        variant={"subscription"}
                      >
                        {banner.buttonText}
                      </Button>
                    </motion.div>

                    {/* Product Image with motion */}
                    <motion.div
                      className="flex-1 max-w-sm md:max-w-md lg:max-w-lg justify-center items-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={
                        isActive
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 100 }
                      }
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <div className="relative">
                        <Image
                          src={banner.imagePath}
                          alt="Product"
                          className="w-full h-full object-contain drop-shadow-2xl"
                          height={300}
                          width={300}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
