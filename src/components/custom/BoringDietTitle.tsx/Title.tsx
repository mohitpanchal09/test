import React from "react";

type Props = {};

function Title({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-4 my-20 md:my-50 relative">
      <div
        className="absolute top-[50%] "
        style={{
          borderRadius: "63px",
          opacity: "0.2",
          background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
          filter: "blur(75px)",
          width: "1524px",
          height: "124px",
        }}
      />
      <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[53.51px] leading-snug text-center lg:text-left">
        Tired of boring{" "}
        <span className="bg-[linear-gradient(90deg,_#03803F_0.04%,_#B3FF00_37.56%,_#055F30_72.31%)] bg-clip-text text-transparent">
          diets{" "}
        </span>
        and counting calories.
      </h1>
      <p className="font-medium text-center">
        Imagine eating this on your diet and achieving your fitness goals
        quickly, no meal repeated.
      </p>
      <p className="font-medium">
        Eat good. <span className="text-[#02803E]">Feel good. </span>Look good
      </p>
    </div>
  );
}

export default Title;
