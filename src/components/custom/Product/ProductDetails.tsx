"use client";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function ProductDetails({}: Props) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute right-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white  overflow-hidden">
          {/* Main Product Section */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Image Section */}
            <div className=" p-0 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 mb-auto">
                <Image
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Beetroot Carrot Smoothie with ingredients"
                  width={100}
                  height={100}
                  className="w-full h-100  object-cover   hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Background Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
            </div>

            {/* Product Details Section */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Beetroot Carrot
                <br />
                Smoothie
              </h1>

              <div className="text-3xl lg:text-4xl font-bold text-[#009245] mb-6">
                ₹ 120.00
              </div>

              <Separator className="my-6" />

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                A vibrant fusion of earthy beetroot and sweet carrot, blended to
                perfection with creamy milk. Keep it cool with ice cubes and
                guilt-free with a touch of sugar-free sweetness. Sip your way to
                a refreshing and wholesome delight!
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-8 z-40">
                <button
                  onClick={decrementQuantity}
                  className="w-12 h-12 z-10 bg-[#03803F] hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <Minus size={20} />
                </button>

                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-12 z-10 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200"
                  min="1"
                />

                <button
                  onClick={incrementQuantity}
                  className="w-12 h-12 z-10 bg-[#03803F] hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="w-fit z-20 bg-[#03803F] hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="p-6 lg:p-8">
            <div className="flex space-x-4 justify-center lg:justify-start">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-green-400 overflow-hidden z-10">
                <Image
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Smoothie thumbnail 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                  width={100}
                  height={100}
                />
              </div>

              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-green-400 overflow-hidden z-10">
                <Image
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Smoothie thumbnail 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute left-0 bottom-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
    </div>
  );
}

export default ProductDetails;
