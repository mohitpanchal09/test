"use client";

import { Card } from "@/components/ui/card";
import { ProductCarouselcard } from "@/types";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ProductCarouselCard({ href, name, price }: ProductCarouselcard) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls}>
      <Card className="rounded-lg overflow-hidden w-[250px] h-[350px] bg-white p-0 gap-0 mx-auto">
        <div className="w-full h-[300px]">
          <Image
            src={href}
            alt={name}
            width={100}
            height={100}
            className="w-full rounded-t-lg h-64 object-cover"
          />
        </div>
        <div className="bg-[#17843E] text-white p-3 h-full flex flex-col justify-between rounded-b-lg gap-y-4">
          <h3 className="text-lg font-semibold leading-none">{name}</h3>
          <p className="text-md font-medium opacity-70">₹ {price.toFixed(2)}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export default ProductCarouselCard;
