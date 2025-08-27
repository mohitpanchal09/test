"use client";

import React, { useEffect } from "react";
import CityAndPincode from "./CityAndPincode";
import MultiStepForm from "./MultiStepForm";
import { MealSubscription, useMealSubscriptionsStore } from "@/store/useMealSubscriptionStore";

function Form({ data }: { data: MealSubscription[] }) {
  const { setSubscriptions } = useMealSubscriptionsStore();

  useEffect(() => {
    if (data && data.length > 0) {
      setSubscriptions(data);
    }
  }, [data, setSubscriptions]);

  return (
    <div className="relative flex flex-col justify-center items-center py-5 md:py-20">
       {/* Blurred Gradient Circle */}
      <div
        className="absolute z-0"
        style={{
          width: "446px",
          height: "446px",
          borderRadius: "446px",
          background: "#009245",
          filter: "blur(150px)",
          right:"20px",
          top:"30%"
        }}
      />
      <div
        className="absolute z-0"
        style={{
          width: "446px",
          height: "446px",
          borderRadius: "446px",
          background: "#009245",
          filter: "blur(150px)",
          left:"20px",
          bottom:"-10%",
        }}
      />
      <CityAndPincode />
      <MultiStepForm />
    </div>
  );
}

export default Form;
