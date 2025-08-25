import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityControlsProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantityControls: React.FC<QuantityControlsProps> = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={handleDecrease}
        className="p-2 hover:bg-gray-50 transition-colors duration-200"
        disabled={quantity <= 1}
      >
        <Minus className="w-4 h-4 text-gray-600" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center py-2 border-0 focus:ring-0 focus:outline-none"
        min="1"
      />
      <button
        onClick={handleIncrease}
        className="p-2 hover:bg-gray-50 transition-colors duration-200"
      >
        <Plus className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default QuantityControls;