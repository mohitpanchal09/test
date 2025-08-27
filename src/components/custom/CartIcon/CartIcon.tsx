"use client";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function CartIcon({}: Props) {
  const { cart } = useCartStore();
  const count = cart?.items.length || 0;

  return (
    <Link href="/cart">
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative h-14 w-14 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 transition-colors cursor-pointer">
          <ShoppingCart size={24} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
              {count}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CartIcon;
