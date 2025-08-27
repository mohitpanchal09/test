// components/providers/CartProvider.tsx
"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
import axios from "axios";
import { apiClient } from "@/lib/apiClient";

export const CartProvider = ({ sessionId }: { sessionId: string }) => {
  console.log("🚀 ~ CartProvider ~ sessionId:", sessionId)
  const { setCart } = useCartStore();

  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await apiClient.get(`/guest-cart/${sessionId}`
        );
        if (response.data.success) {
          setCart(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    if (sessionId) {
      fetchCart();
    }
  }, [sessionId, setCart]);

  return null;
};
