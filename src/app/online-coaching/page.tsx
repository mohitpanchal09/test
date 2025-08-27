"use client";

import FeaturedCarousel from "@/components/custom/Featured/Featured";
import Healthier from "@/components/custom/Healthier/Healthier";
import OneDayDietExample from "@/components/custom/OneDayDietExample/OneDayDietExample";
import HowItWorks from "@/components/custom/OnlineCoaching/HowItWorks";
import Stripe from "@/components/custom/OnlineCoaching/Stripe";
import OurPlans from "@/components/custom/OurPlans/OurPlans";
import Transformations from "@/components/custom/Transformations/Transformations";
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
    <div className="flex flex-col justify-center py-5 lg:py-10 overflow-hidden">
       <AnimatedSection>
      <div className="flex flex-col justify-center items-center gap-y-2 lg:gap-y-4">
        <h1 className="font-semibold text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl">
          Customised Online Diet and workout plans from{" "}
        </h1>
        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(90.18deg,_#03803F_0.18%,_#B3FF00_45.4%,_#055F30_87.26%)] bg-clip-text text-transparent text-center mb-4 sm:mb-6 md:mb-8">
          "INDIA’S LEADING HEALTH AND FITNESS BRAND”
        </h3>
      </div>
      </AnimatedSection>

      <AnimatedSection>
        <Stripe />
      </AnimatedSection>

      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>

      <AnimatedSection>
        <OurPlans />
      </AnimatedSection>

      <AnimatedSection>
        <OneDayDietExample />
      </AnimatedSection>

      <AnimatedSection>
        <Transformations title="#Results" />
      </AnimatedSection>

      <AnimatedSection>
        <Healthier />
      </AnimatedSection>

      <AnimatedSection>
        <FeaturedCarousel />
      </AnimatedSection>
    </div>
  );
}

export default Page;
