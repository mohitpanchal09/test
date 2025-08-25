"use client";

import DeliveryScheduleBanner from "@/components/custom/Banners/DeliveryScheduleBanner";
import DeliveryContact from "@/components/custom/DeliverySchedule/DeliveryContact";
import DeliveryTimings from "@/components/custom/DeliverySchedule/DeliveryTimings";
import SectionTitle from "@/components/custom/Titles/SectionTitle";
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
    <div>
      <AnimatedSection>
        <DeliveryScheduleBanner />
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-6">
          <SectionTitle name="Delivery Timings" />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <DeliveryTimings />
      </AnimatedSection>

      <AnimatedSection>
        <DeliveryContact />
      </AnimatedSection>
    </div>
  );
}

export default Page;
