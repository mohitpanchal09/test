"use client"

import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-6 sm:mb-8 w-full">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-green-600 text-white shadow-lg'
                  : isCompleted
                  ? 'bg-[#D7F8E6] '
                  : 'bg-[#D7F8E6]'
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < totalSteps && (
              <div
                className={`w-12 h-0.5 transition-all duration-300 ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;