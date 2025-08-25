"use client";

import DynamicBanner from "@/components/custom/Banners/DynamicBanner";
import FeaturedCarousel from "@/components/custom/Featured/Featured";
import HowPartnerWithUs from "@/components/custom/HowPartnerWithUs/HowPartnerWithUs";
import PartnerWithUsForm from "@/components/custom/HowPartnerWithUs/PartnerWithUsForm";
import SupportServices from "@/components/custom/SupportServices/SupportServices";
import WhyPartnerWithUs from "@/components/custom/WhyPartnerWithUs/WhyPartnerWithUs";
import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Title() {
  return (
    <div className="z-10 flex flex-col justify-center items-center gap-2">
      <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md px-2 text-center">
        Ever dreamt of owning your own healthy food chain?
      </h2>
      <button
        className="cursor-pointer text-white mx-auto h-12 w-fit p-2 rounded-lg border border-white flex items-center"
        style={{
          background: "rgba(255, 255, 255, 0.10)",
        }}
      >
        Partner with us <ChevronRight size={20} />{" "}
      </button>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Page({}: Props) {
  return (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DynamicBanner
          bgImageUrl="/assets/partner-with-us-banner.png"
          Component={Title}
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhyPartnerWithUs />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HowPartnerWithUs />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SupportServices />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FeaturedCarousel />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PartnerWithUsForm />
      </motion.div>
    </div>
  );
}

export default Page;
