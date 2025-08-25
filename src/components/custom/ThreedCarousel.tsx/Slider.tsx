"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import "./styles.css";
import TransformationCard from "../Transformations/TransformationCard";

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
        transform: `translateX(0px) translateZ(0px) rotateY(0deg) scale(1.35)`,
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
    <div className="threed-carousel">
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
        className="z-50 cursor-pointer rotate-[180deg] absolute top-[50%] left-20 h-14 w-14 rounded-full bg-gradient-to-b from-[#B3FF00]/20 via-[#009245]/20 to-[#034824]/20  border border-white/20 backdrop-blur-md p-4"
        onClick={prev}
        size={50}
        stroke="white"
        fill="white"
      />
      <Play
        className="z-50 cursor-pointer absolute top-[50%] right-20 h-14 w-14 bg-gradient-to-b from-[#B3FF00]/20 via-[#009245]/20 to-[#034824]/20 rounded-3xl border border-white/20 backdrop-blur-md p-4"
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
      <TransformationCard src={props.src} />
    </div>
  );
};
