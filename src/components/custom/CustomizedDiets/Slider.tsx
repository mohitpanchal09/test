"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import "./styles.css";
import DietTypeCard from "./DietTypeCard";

export default function Carousel(props: any) {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide || 0);

  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);
  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const GAP = 200; // Gap between slides
  const baseTranslateX = 240 + GAP;

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: `translateX(0px) translateZ(0px) rotateY(0deg)`,
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: `translateX(${-baseTranslateX}px) translateZ(-350px) scale(1.15)`,
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: `translateX(${baseTranslateX}px) translateZ(-350px) scale(1.15)`,
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: `translateX(${-baseTranslateX * 2}px) translateZ(-500px) scale(1)`,
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: `translateX(${baseTranslateX * 2}px) translateZ(-500px) scale(1)`,
        zIndex: 8,
      };
    else
      return {
        opacity: 0,
        transform: `translateX(${baseTranslateX * 2}px) translateZ(-500px) scale(0.9)`,
        zIndex: 7,
      };
  };

  return (
    <div className="threed-carousel relative">
      {/* Carousel */}
      <div className="slideC relative">
        {props.data.map((item: any, i: number) => (
          <React.Fragment key={i}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection -z-10"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Navigation */}
      <Play
        className="z-50 cursor-pointer rotate-[180deg] absolute top-[50%] -left-[0px]  sm:-left-[100px] md:-left-[200px] bg-gradient-to-b from-[#B3FF00]/20 via-[#009245]/20 to-[#034824]/20 rounded-3xl border border-white/20 backdrop-blur-md p-4"
        onClick={prev}
        size={50}
        stroke="white"
        fill="white"
      />
      <Play
        className="z-50 cursor-pointer absolute top-[50%] -right-[0px] sm:-right-[100px] md:-right-[200px] bg-gradient-to-b from-[#B3FF00]/20 via-[#009245]/20 to-[#034824]/20 rounded-3xl border border-white/20 backdrop-blur-md p-4"
        onClick={next}
        size={50}
        stroke="white"
        fill="white"
      />
    </div>
  );
}

const SliderContent = (props: any) => {
  return (
    <div className="sliderContent">
      <DietTypeCard {...props}/>
    </div>
  );
};
