"use client";
import React from "react";
import Slider from "./Slider";
import "./styles.css";
import { dietTypes } from "@/lib/dietData";

type Props = {};

function ThreedCarousel({}: Props) {
  return (
    <div className="threed-carousel mb-30">
      <div className="center">
        <Slider data={dietTypes} activeSlide={2} />
      </div>
    </div>
  );
}

export default ThreedCarousel;
