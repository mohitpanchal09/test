"use client";

import SubscribeNowBanner from "@/components/custom/Banners/SubscribeNowBanner";
import Form from "@/components/custom/MultiStepForm.tsx/Form";
import DetailsAndCards from "@/components/custom/Pricing/DetailsAndCards";
import FoodYouLove from "@/components/custom/Pricing/FoodYouLove";
import MenuOptionBanner from "@/components/custom/Pricing/MenuOptionBanner";
import PricingBannerCarousel from "@/components/custom/Pricing/PricingBannerCarousel";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {};

// Reusable Animated Wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

function Page({}: Props) {
  return (
    <div className="overflow-hidden">
      <AnimatedSection>
        <PricingBannerCarousel />
      </AnimatedSection>

      <AnimatedSection>
        <DetailsAndCards />
      </AnimatedSection>

      <AnimatedSection>
        <Form />
      </AnimatedSection>

      <AnimatedSection>
        <FoodYouLove />
      </AnimatedSection>
    </div>
  );
}

export default Page;
