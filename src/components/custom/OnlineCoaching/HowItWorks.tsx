import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import { UserRoundPlus, Dumbbell, Utensils, Smartphone } from "lucide-react";

type Props = {};

function HowItWorks({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl sm:text-4xl">How it works</h1>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <HowItWorksCard
          Icon={UserRoundPlus}
          desc="Sign up for the plan and download the app"
        />
        <HowItWorksCard
          Icon={Dumbbell}
          desc="Tell us more about your dream fitness goals"
        />
        <HowItWorksCard
          Icon={Utensils}
          desc="Fully customized diet plan based on your favorite foods"
        />
        <HowItWorksCard
          Icon={Smartphone}
          desc="Exclusive access to ParaFit App for regular follow-ups and check-ins "
        />
      </div>
    </div>
  );
}

export default HowItWorks;
