// components/customized-diets/DietCard.tsx
import React from "react";

interface DietCardProps {
  day: string;
  bg: string;
  meals: string[][];
}

export default function DietCard({ day, bg, meals }: DietCardProps) {
  return (
    <div
      className={`${bg} rounded-lg p-4 sm:p-6 text-white backdrop-blur-md flex-1 min-w-[250px]`}
    >
      <h4 className="font-bold text-lg sm:text-xl mb-4">{day}</h4>
      <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr]">
        {meals.map(([meal, desc], i) => (
          <React.Fragment key={i}>
            <p className="text-xs sm:text-sm font-semibold py-2 border-b border-white/20 border-r pr-2">
              {meal}
            </p>
            <p className="text-xs py-2 border-b border-white/20 pl-2">{desc}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
