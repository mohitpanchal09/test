"use client";

import React, { useEffect } from "react";
import CartHeader from "@/components/custom/Cart/CartHeader";
import CartItem from "@/components/custom/Cart/CartItem";
import CartSummary from "@/components/custom/Cart/CartSummary";
import CartTable from "@/components/custom/Cart/CartTable";
import CouponSection from "@/components/custom/Cart/CouponSection";
import { useCartStore } from "@/store/useCartStore";
import { apiClient } from "@/lib/apiClient"; // axios wrapper you created
import { getSessionId } from "../actions/session";

function CartPage() {
  const { cart, setCart, clearCart } = useCartStore();
  console.log("🚀 ~ CartPage ~ cart:", cart);

  // ✅ Fetch cart data on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const sessionId = await getSessionId();
        const res = await apiClient.get(`/guest-cart/${sessionId}`);
        setCart(res.data.data); // store API response in Zustand
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [setCart]);

  const handleQuantityChange = async (id: string, newQuantity: number) => {
    if (!cart) return;
    try {
      const sessionId = await getSessionId();
      await apiClient.patch(`/guest-cart/${sessionId}/items/${id}`, {
        quantity: newQuantity,
      });
      // Refetch the cart to ensure UI is in sync with the backend
      const res = await apiClient.get(`/guest-cart/${sessionId}`);
      setCart(res.data.data);
    } catch (err) {
      console.error("Error updating quantity:", err);
      alert("Failed to update quantity.");
    }
  };

  const handleRemoveItem = async (id: string) => {
    if (!cart) return;
    try {
      const sessionId = await getSessionId();
      await apiClient.delete(`/guest-cart/${sessionId}/items/${id}`);
      const res = await apiClient.get(`/guest-cart/${sessionId}`);
      setCart(res.data.data);
    } catch (err) {
      console.error("Error removing item from cart:", err);
      alert("Failed to remove item from cart.");
    }
  };

  const subtotal =
    cart?.items.reduce((total, item) => total + item.total_price, 0) ?? 0;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <CartHeader />

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <CartTable />

            <div className="bg-white">
              {cart?.items.map((item) => (
                <CartItem
                  key={item._id}
                  id={item._id}
                  name={
                    item.item_type == "meal_subscription"
                      ? item.item_details.meal_subscription_details.name
                      :item.item_type=="program" ? item.item_details.program_details.name : item.item_details.product_details.name
                  }
                  price={item.unit_price}
                  quantity={
                    item.item_type == "meal_subscription"
                      ? 1 
                      : item.item_type=="program" ? 1 : item.item_details.quantity
                  } // fallback since API doesn’t provide quantity
                  image={
                    item.item_type == "meal_subscription"
                      ? item.item_details.meal_subscription_details.banner_image
                      : item.item_type=="program" ? item.item_details.program_details.thumbnail_url: item.item_details.product_details.images[0]
                  }
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                  type={item.item_type}
                  total_price={item.total_price}
                />
              ))}
            </div>

            <CouponSection />
          </div>

          <div className="lg:col-span-1">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>

        {cart?.items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
