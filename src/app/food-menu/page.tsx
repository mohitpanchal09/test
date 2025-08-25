"use client";

import FoodMenuStripeCarousel from "@/components/custom/FoodMenuStripe/FoodMenuStripeCarousel";
import Meals from "@/components/custom/Meals/Meals";
import SampleMenu from "@/components/custom/SampleMenu/SampleMenu";
import { Button } from "@/components/ui/button";
import { foodMenuStripeData } from "@/lib/foodMenuStripeData";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {};

// Reusable Animated Wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      {children}
    </motion.div>
  );
};

function Page({}: Props) {
  return (
    <div className="overflow-hidden">
      <AnimatedSection>
        <FoodMenuStripeCarousel data={foodMenuStripeData} />
      </AnimatedSection>

      <div className="relative flex flex-col items-center">
        {/* Gradient background blob */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "63px",
            opacity: 0.2,
            background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
            filter: "blur(200px)",
            flexShrink: "0"
          }}
        />

        <AnimatedSection>
          <SampleMenu />
        </AnimatedSection>

        <AnimatedSection>
          <Meals />
        </AnimatedSection>

        <AnimatedSection>
          <Button
            className="rounded-full border-0 px-12 mb-10"
            variant={"subscription"}
          >
            View Full Menu
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Page;
