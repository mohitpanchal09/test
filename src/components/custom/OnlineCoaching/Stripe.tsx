import { onlineCoachingAchievements } from "@/lib/onlineCoachingData";
import React from "react";
import DeliveryCard from "../DeliverySchedule/DeliveryCard";

type Props = {};

function Stripe({}: Props) {
  return (
    <div
      className="py-10 flex flex-col items-center my-10"
      style={{
        backgroundImage: `
      radial-gradient(ellipse at 5% 90%, #a1c935, #009245, #00753b),
      radial-gradient(ellipse at 95% 10%, #b3ff00, #02803e, transparent)
    `,
      }}
    >
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 ">
        {onlineCoachingAchievements.map((item, index) => (
          <DeliveryCard key={index} Icon={item.Icon} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}

export default Stripe;
