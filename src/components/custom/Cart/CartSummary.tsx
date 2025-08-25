import React from 'react';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      
      <div className="space-y-3">
        <button className="w-full cursor-pointer bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
          Checkout
        </button>
        
        <button className="w-full text-gray-600 hover:text-gray-900 transition-colors duration-200">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CartSummary;