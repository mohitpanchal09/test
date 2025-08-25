"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingDish() {
  const floatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const source = document.querySelector(".banner-dish") as HTMLElement | null;
    const target = document.querySelector("#dish-target") as HTMLElement | null;
    if (!source || !target || !floatRef.current) return;

    const srcRect = source.getBoundingClientRect();
    console.log("🚀 ~ FloatingDish ~ srcRect:", srcRect)
    const tgtRect = target.getBoundingClientRect();
    console.log("🚀 ~ FloatingDish ~ tgtRect:", tgtRect)

    gsap.set(floatRef.current, {
      position: "fixed",
      top: 0,
      left: 0,
      x: srcRect.left,
      y: srcRect.top,
      width: srcRect.width,
      height: srcRect.height,
      zIndex: 50,
      pointerEvents: "none",
    });

    source.style.visibility = "hidden";

    const scale = tgtRect.width / srcRect.width;

    gsap.to(floatRef.current, {
      x: 2000,
      y: tgtRect.top,
      scale: scale,
      ease: "none",
      scrollTrigger: {
        trigger: source,
        start: "top top",
        end: () =>
          "+=" + (tgtRect.top - srcRect.top + window.innerHeight / 2),
        scrub: true,
      },
    });

    return () => {
      source.style.visibility = "";
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={floatRef}>
      <Image
        src="/assets/home-page-banner/dish.png"
        width={400}
        height={400}
        alt="dish"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
