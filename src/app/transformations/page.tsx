"use client";

import TransformationBanner from "@/components/custom/Banners/TransformationBanner";
import BestVersion from "@/components/custom/BestVersion/BestVersion";
import Transformations from "@/components/custom/Transformations/Transformations";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {};

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
        <TransformationBanner />
      </AnimatedSection>

      <AnimatedSection>
        <BestVersion />
      </AnimatedSection>

      <AnimatedSection>
        <Transformations title="#Transformations" />
      </AnimatedSection>
    </div>
  );
}

export default Page;
