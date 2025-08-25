"use client"
import CartHeader from "@/components/custom/Cart/CartHeader";
import CartItem from "@/components/custom/Cart/CartItem";
import CartSummary from "@/components/custom/Cart/CartSummary";
import CartTable from "@/components/custom/Cart/CartTable";
import CouponSection from "@/components/custom/Cart/CouponSection";
import React, { useState } from "react";

interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
function page() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: "1",
      name: "Blueberry & Pecan Yogurt Bowl",
      price: 570,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      name: "Blueberry & Pecan Yogurt Bowl",
      price: 570,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <CartHeader />

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <CartTable />

              <div className="bg-white">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              <CouponSection />
            </div>

            <div className="lg:col-span-1">
              <CartSummary subtotal={subtotal} />
            </div>
          </div>

          {cartItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
