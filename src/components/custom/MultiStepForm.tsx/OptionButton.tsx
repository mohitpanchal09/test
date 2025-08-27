"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface OptionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  variant?: "default" | "small";
  disabled?: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  isSelected,
  onClick,
  variant = "default",
  disabled = false,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full  min-h-[48px] rounded-sm font-medium border transition-all duration-200 text-xs z-50
        text-center cursor-pointer whitespace-normal break-words leading-snug
        ${variant === "small" 
          ? "px-3 sm:px-4 py-2 text-xs sm:text-sm" 
          : "px-4 sm:px-6 py-2 text-sm sm:text-base"}
        ${isSelected 
          ? "bg-[#009245] text-white border-[#009245] hover:bg-[#0a6b37] shadow-lg cursor-pointer" 
          : "bg-white text-gray-700 border-gray-300 hover:bg-[#009245] hover:text-white cursor-pointer"
        }
      `}
    >
      {label}
    </Button>
  );
};

export default OptionButton;
