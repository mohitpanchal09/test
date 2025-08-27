"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { useCartStore } from "@/store/useCartStore";

const Banner: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const getSession = async () => {
      try {
        // fetch session id from your Next.js API route
        const res = await fetch("/api/guest-session");
        const data = await res.json();
        setSessionId(data.sessionId);

        // fetch cart data from backend
        const cartRes = await axios.get(
          `https://parafit-backend.onrender.com/api/v1/guest-cart/${data.sessionId}`
        );

        if (cartRes.data?.success && cartRes.data?.data) {
          setCart(cartRes.data.data); // store cart data in Zustand
        }

        console.log("🚀 ~ Cart Response:", cartRes.data);
      } catch (err) {
        console.error("Failed to fetch session ID or cart:", err);
      }
    };

    getSession();
  }, [setCart]);

  // refs for GSAP animations
  const veggieRef1 = useRef<HTMLDivElement>(null);
  const veggieRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (veggieRef1.current) {
      gsap.to(veggieRef1.current, {
        y: -50,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
    if (veggieRef2.current) {
      gsap.to(veggieRef2.current, {
        y: -100,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  // track scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Curve movement math ----
  let x = scrollY * 2;
  let y = Math.pow(scrollY * 0.8, 1);

  const maxX = 700;
  const maxY = 900;

  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  return (
    <div className="relative w-full h-fit mx-auto p-2 md:p-4">
      <div
        className="relative rounded-4xl overflow-visible shadow-2xl h-fit sm:h-[550px] md:h-[650px] bg-no-repeat bg-cover bg-center py-4 px-4 sm:px-8 md:px-12"
        style={{
          backgroundImage: "url('/assets/home-page-banner/banner.svg')",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Top half */}
          <div className="basis-1/2 flex items-center justify-center text-center">
            <h1 className="font-medium text-white 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 
              leading-snug sm:leading-snug md:leading-tight lg:leading-tight text-center md:text-justify"
            >
              INDIA'S #1{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #B3FF00 36.32%, #FFF 100.05%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CUSTOMIZED DIET{" "}
              </span>
              &{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #B3FF00 36.32%, #FFF 100.05%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                HEALTHY
              </span>{" "}
              FOOD DELIVERY
            </h1>
          </div>

          {/* Bottom half */}
          <div className="flex flex-col-reverse md:flex-row h-full w-full mt-4 sm:mt-6 md:mt-8 relative">
            
            {/* Veggie 1 */}
            <div
              ref={veggieRef1}
              className="absolute bottom-0 -left-[40%] h-full w-full"
            >
              <Image
                alt=""
                height={100}
                width={100}
                src={"/assets/home-page-banner/veggie1.svg"}
                className="h-full w-full -z-0"
              />
            </div>

            {/* Veggie 2 */}
            <div
              ref={veggieRef2}
              className="absolute bottom-0 right-0 h-[50%] w-[50%]"
            >
              <Image
                alt=""
                height={100}
                width={100}
                src={"/assets/home-page-banner/veggie2.svg"}
                className="h-full w-full"
              />
            </div>

            {/* Dish with animation */}
            <div
              className="flex flex-1/2 relative z-20"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <Image
                src={"/assets/home-page-banner/dish.svg"}
                alt=""
                height={100}
                width={100}
                className="h-full w-full"
                style={{
                  animation: "spin 15s linear infinite",
                }}
              />
            </div>

            <div className="flex-1/2 flex flex-col items-center md:items-end gap-y-2">
              <p className="text-white text-center md:text-right text-2xl">
                (In Delhi NCR, Mumbai, Pune & Bengaluru)
              </p>
              <Button
                variant="subscription"
                className="my-5 shadow-black shadow-2xl cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              >
                Start Food Subscription
              </Button>

              <p className="text-white text-center md:text-right text-xl sm:text-2xl md:text-3xl z-20">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #B3FF00 36.32%, #FFF 100.05%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  80,000+
                </span>{" "}
                transformations over past{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #B3FF00 36.32%, #FFF 100.05%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  7+ yrs
                </span>{" "}
                Fresh macro counted meals. No cold storage or bulk preparation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
