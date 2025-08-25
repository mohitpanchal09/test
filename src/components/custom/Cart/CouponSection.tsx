import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CouponSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="border-t border-gray-200 pt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 mb-4"
      >
        <span>Have A Coupon? Click Here To Enter Your Code</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 ml-2" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-2" />
        )}
      </button>
      
      {isExpanded && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponSection;