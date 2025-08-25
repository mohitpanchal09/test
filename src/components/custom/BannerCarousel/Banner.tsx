import { BannerProps } from '@/types';
import React from 'react';



const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  buttonText,
  imagePath,
  backgroundColor,
  textColor = 'text-white',
  onButtonClick = () => {},
}) => {
  return (
    <div className={`w-full  ${backgroundColor} relative overflow-hidden`}>
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-bold ${textColor} leading-tight mb-6`}>
              {title}
            </h1>
            <p className={`text-lg lg:text-xl ${textColor} opacity-90 mb-8 leading-relaxed`}>
              {subtitle}
            </p>
            <button
              onClick={onButtonClick}
              className={`px-8 py-4 ${textColor === 'text-white' ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30`}
            >
              {buttonText}
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <img
                src={imagePath}
                alt="Product"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;