import React from "react";

type Props = {
  bgImageUrl: string;
  Component: React.ComponentType;
  href?: string;
};

const DynamicBanner = ({ bgImageUrl, Component }: Props) => {
  return (
    <div className="relative w-full h-[620px] flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${bgImageUrl}")` }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <Component />
    </div>
  );
};

export default DynamicBanner;
