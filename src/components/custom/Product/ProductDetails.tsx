"use client";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { apiClient } from "@/lib/apiClient"; // Your Axios wrapper
import { useCartStore } from "@/store/useCartStore"; // Zustand store for cart
import { getSessionId } from "@/app/actions/session";

type Product = {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  stock_quantity: number;
  nutritional_info: string;
};

type Props = {
  product: Product;
};

function ProductDetails({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useCartStore(); // Zustand store setter

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  // Function to add product to cart
  const handleAddToCart = async () => {
    try {
      const sessionId = await getSessionId();
      const response = await apiClient.post(`/guest-cart/${sessionId}`, {
        item_type: "product",
        item_details: {
          product_id: product._id,
          quantity: quantity,
        },
      });
      // Update the Zustand store with the new cart data
      setCart(response.data.data);
      alert("Product added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute right-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="p-0 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 mb-auto">
                <Image
                  src={product.images?.[0] || "/assets/default.png"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="lg:w-[500px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Product Info */}
            <div className="p-8 lg:p-12 z-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="text-3xl lg:text-4xl font-bold text-[#009245] mb-6">
                ₹ {product.price.toFixed(2)}
              </div>
              <Separator className="my-6" />
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-8">
                <button
                  onClick={decrementQuantity}
                  className="w-12 h-12 bg-[#03803F] hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-md"
                >
                  <Minus size={20} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-12 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-green-500 bg-white"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="w-12 h-12 bg-[#03803F] hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-md"
                >
                  <Plus size={20} />
                </button>
              </div>
              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-fit bg-[#03803F] cursor-pointer hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-xl transition-all duration-200 shadow-lg text-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
          {/* Thumbnail Images */}
          {product.images?.length > 1 && (
            <div className="p-6 lg:p-8 flex space-x-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg shadow-md cursor-pointer overflow-hidden border-2 border-transparent hover:border-green-400"
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Background Glow */}
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute left-0 bottom-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
    </div>
  );
}

export default ProductDetails;
