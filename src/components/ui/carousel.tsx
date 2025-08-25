"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface SlideData {
  title: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg and above
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // mobile
    }
    return 1;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - visibleSlides);

  const handlePreviousClick = () => {
    setCurrent(prev => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setCurrent(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      {/* Navigation Buttons */}
      <button
        className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handlePreviousClick}
        disabled={current === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-gray-700" />
      </button>

      <button
        className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleNextClick}
        disabled={current === maxIndex}
        aria-label="Next slide"
      >
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-gray-700" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / visibleSlides)}%)`,
          }}
        >
          {slides.map((slide, index) => {
            const middleIndex = current + Math.floor(visibleSlides / 2);
            const isMiddle = index === middleIndex;

            return (
              <div
                key={index}
                className={`flex-shrink-0 px-1 sm:px-2 lg:px-3 py-2 sm:py-4 lg:py-6 transform transition-transform duration-300 ease-in-out ${
                  isMiddle ? "scale-105 z-10" : "scale-95 z-0"
                }`}
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <div className={`bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden w-full max-w-sm mx-auto ${isMiddle ? "shadow-2xl" : "shadow"}`}>
                  {/* Instagram Header */}
                  <div className="flex items-center p-2 sm:p-3 lg:p-4 border-b border-gray-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">PF</span>
                      </div>
                    </div>
                    <div className="ml-2 sm:ml-3 flex-1">
                      <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">parafit.in</h3>
                      <p className="text-xs text-gray-500">New Delhi</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                      height={100}
                      width={100}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] lg:border-l-[12px] border-l-gray-700 border-t-[4px] sm:border-t-[6px] lg:border-t-[8px] border-t-transparent border-b-[4px] sm:border-b-[6px] lg:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-2 sm:p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <button className="hover:text-red-500 transition-colors">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button>
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a13.366 13.366 0 01-5.431-1.151C6.11 18.98 4.847 19 3.666 19h-.115a.8.8 0 01-.725-.474L1.19 14.652A7.989 7.989 0 01.998 12.3c0-4.418 4.03-8 9.002-8s9 3.582 9 8z" />
                          </svg>
                        </button>
                        <button>
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                      <button>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>

                    <div className="text-xs sm:text-sm text-gray-900">
                      <span className="font-semibold">SUCCESS WITH PARAFIT</span>
                    </div>

                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                      <p className="line-clamp-2 lg:line-clamp-3">
                        Amazing transformation results with ParaFit&apos;s proven program. Join thousands who have achieved their fitness goals!
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-3 text-xs text-gray-400">
                      2 hours ago
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6 space-x-1 sm:space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === current
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
