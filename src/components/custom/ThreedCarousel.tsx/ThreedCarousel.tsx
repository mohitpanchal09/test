"use client";
import React from "react";
import Slider from "./Slider";
import "./styles.css";
import { data } from "@/lib/transformationCardData";

type Props = {};

function ThreedCarousel({}: Props) {
  return (
    <div className="threed-carousel">
      <div className="center">
        <Slider data={data} activeSlide={2} />
      </div>
    </div>
  );
}

export default ThreedCarousel;
