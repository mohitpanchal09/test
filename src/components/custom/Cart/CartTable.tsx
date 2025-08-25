import React from 'react';

const CartTable: React.FC = () => {
  return (
    <div className="hidden lg:block mb-6">
      <div className="grid grid-cols-12 gap-6 pb-4 border-b border-gray-200 text-sm font-medium text-gray-700">
        <div className="col-span-5">Product</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-2 text-right">Total</div>
      </div>
    </div>
  );
};

export default CartTable;