"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full mx-auto">

        <AnimatedSection>
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="rounded-full flex items-center justify-center">
                <Image src='/assets/thank-you/smile.svg' height={100} width={100} alt='img'/>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-[#009245] mb-4">
              Hey, Welcome To Our Family !
            </h1>
            
            <p className="text-[#009245] text-lg mb-8">
              We are happy to serve you
            </p>
            
            <p className="text-gray-700 text-base max-w-2xl mx-auto leading-relaxed">
              Thank you for purchasing with us! You will receive an email within a few minutes for the 
              confirmation. Keep an eye on your inbox!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* Green CTA Section */}
          <div className="bg-[#009245] text-white text-center py-12 px-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Help us know you a little bit better!
            </h2>
            <p className="text-green-100 mb-6 text-lg">
              Fill up this query form & your diet plan will be designed on the basis of that!
            </p>
            <button className="bg-white text-[#009245] px-10 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Click Here
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* App Download Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Don't forget to download our application
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              below link, to see your updated plan.
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kindly give us a days' time to curate your diet. Meanwhile, our team will get in touch with you shortly.
            </p>
            
            <button className="bg-[#009245] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mb-6">
              Download App
            </button>
            
            <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              (If The Payment is Not Updated On The Application, Don't Worry) Your Money is Completely Safe With 
              Us, It Takes A Little Time To Get Updated)
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

export default Page;
