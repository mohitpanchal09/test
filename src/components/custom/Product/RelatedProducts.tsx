"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!products || products.length === 0) {
    return null; // Don't show the section if no related products
  }

  const maxIndex = Math.max(0, Math.ceil(products.length / itemsPerView) - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-full bg-white py-12 px-4 z-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Related Products
        </h2>
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-xl"
            }`}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-xl"
            }`}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Products Container */}
          <div className="overflow-hidden mx-4 md:mx-16">
            <div
              className="flex justify-center transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product._id}
                  className={`flex-shrink-0 ${
                    itemsPerView === 1 ? "w-full" : "w-1/2"
                  } ${itemsPerView === 3 ? "lg:w-1/4" : ""} px-4`}
                >
                  <div className="bg-white border rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    {/* Product Image */}
                    <div className="flex items-center justify-center relative overflow-hidden bg-gray-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-green-600 font-medium">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 lg:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
