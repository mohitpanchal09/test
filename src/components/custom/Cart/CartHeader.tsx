import React from 'react';
import { ChevronRight } from 'lucide-react';

const CartHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 lg:mb-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cart</h1>
      <nav className="flex items-center justify-center text-sm text-gray-600">
        <span className="hover:text-gray-900 cursor-pointer">Home</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900">Your Shopping Cart</span>
      </nav>
    </div>
  );
};

export default CartHeader;