"use client";
import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";

interface ParallaxProps {
  text: string;
  baseVelocity: number;
}

function ParallaxText({ text, baseVelocity }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionFactor = React.useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-green-800 text-white font-bold z-10">
      <motion.div className="flex" style={{ x }}>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </motion.div>
    </div>
  );
}

const ScrollingText = () => {
  const topText =
    "Flat 10% OFF on your 1st Order | Use Code: FIT10 ・ Flat 10% OFF on your 1st Order | Use Code: FIT10 ・";
  const bottomText =
    "Free Delivery Charges Above ₹999/- ・ Free Delivery Charges Above ₹999/- ・";

  return (
    <div className="w-full my-20 relative">
      {/* Gradient Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3472px] h-[99px] flex-shrink-0"
        style={{
          background: "linear-gradient(180deg, #039C4C 0%, #02803E 100%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      {/* Top Line */}
      <ParallaxText text={topText} baseVelocity={-5} />

      {/* Gap */}
      <div className="h-[4px] bg-transparent" />

      {/* Bottom Line */}
      <ParallaxText text={bottomText} baseVelocity={5} />
    </div>
  );
};

export default ScrollingText;
