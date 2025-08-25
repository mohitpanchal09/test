"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

const RelatedProducts: React.FC = () => {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Strawberry Smoothie",
      price: 110,
      image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "bg-pink-200"
    },
    {
      id: 2,
      name: "Berry Blast Smoothie",
      price: 125,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "bg-purple-200"
    },
    {
      id: 3,
      name: "Mango Delight",
      price: 115,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "bg-orange-200"
    },
    {
      id: 4,
      name: "Green Power Smoothie",
      price: 130,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "bg-green-200"
    },
    {
      id: 5,
      name: "Tropical Paradise",
      price: 135,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300",
      color: "bg-yellow-200"
    }
  ];

  // Calculate maxIndex based on whether products can be perfectly divided by itemsPerView
  const maxIndex = Math.max(0, Math.ceil(products.length / itemsPerView) - 1);
  
  const nextSlide = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : prev));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
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
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-50 hover:shadow-xl'
            }`}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-50 hover:shadow-xl'
            }`}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
          {/* Products Container */}
          <div className="overflow-hidden mx-4 md:mx-16">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 ${itemsPerView === 1 ? 'w-full' : 'w-1/2'} ${itemsPerView === 3 ? 'lg:w-1/4' : ''} px-4`}
                >
                  <div className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    {/* Product Image */}
                    <div className={`${product.color} flex items-center justify-center relative overflow-hidden`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="w-100 h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
                    ? 'bg-green-600'
                    : 'bg-gray-300 hover:bg-gray-400'
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