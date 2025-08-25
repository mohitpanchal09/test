import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function CartIcon({}: Props) {
  return (
    <Link href="/cart">
        <div className="fixed bottom-6 h-12 w-12 right-6 z-50 p-2 bg-green-800 text-white flex items-center justify-center rounded-full ">
      <ShoppingCart
        size={20}
        className=" cursor-pointer   shadow-lg hover:scale-105 transition-transform"
      />

            
        </div>
    </Link>
  );
}

export default CartIcon;
