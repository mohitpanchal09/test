import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  Icon: LucideIcon;
  desc: string;
};

function HowItWorksCard({ Icon, desc }: Props) {
  return (
    <div className="w-[200px] h-[200px] flex flex-col justify-center items-center gap-10">
      <Icon className="text-white bg-[#009245] h-12 w-12 p-3 rounded-xl"/>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default HowItWorksCard;
