"use client";

import React from "react";
import { deliveryTimings } from "@/lib/deliveryTimingData";
import DeliveryCard from "./DeliveryCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {};

// Reusable Animated Wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

function DeliveryTimings({}: Props) {
  return (
    <div
      className="py-10 flex flex-col items-center"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 5% 90%, #a1c935, #009245, #00753b),
          radial-gradient(ellipse at 95% 10%, #b3ff00, #02803e, transparent)
        `,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        {deliveryTimings.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.2}>
            <DeliveryCard Icon={item.Icon} desc={item.desc} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

export default DeliveryTimings;
