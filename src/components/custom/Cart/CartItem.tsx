import React from "react";
import QuantityControls from "./QuantityControl";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  type: string;
  total_price: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
  type,
  total_price,
}) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 lg:items-center">
        <div className="lg:col-span-5 flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium text-gray-900">{name}</h3>
            <Button
              onClick={() => onRemove(id)}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 mt-1 cursor-pointer"
              variant={"outline"}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 text-gray-900 font-medium">
          {/* ₹{total_price.toFixed(2)} */}
        </div>
        <div className="lg:col-span-3 flex justify-center">
          {type == "product" && (
            <QuantityControls
              quantity={quantity}
              onQuantityChange={(newQuantity) =>
                onQuantityChange(id, newQuantity)
              }
            />
          )}
        </div>
        <div className="lg:col-span-2 text-right text-gray-900 font-medium">
          ₹{total_price.toFixed(2)}
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="flex space-x-4 mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{name}</h3>
            <p className="text-gray-600 text-sm mt-1">₹{price.toFixed(2)}</p>
            <Button
              onClick={() => onRemove(id)}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 mt-1 cursor-pointer"
              variant={"outline"}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {type == "product" && (
            <QuantityControls
              quantity={quantity}
              onQuantityChange={(newQuantity) =>
                onQuantityChange(id, newQuantity)
              }
            />
          )}
          <div className="text-lg font-medium text-gray-900">
            ₹{total_price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
