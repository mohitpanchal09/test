"use client";
import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import PersonalInfoStep from "./PersonalInfoStep";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useFormStore } from "@/store/useFormStore";

const MultiStepForm: React.FC = () => {
  const { formData } = useFormStore();

  const renderCurrentStep = () => {
    switch (formData.currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 2.5:
        return <PersonalInfoStep />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <div>Step not found</div>;
    }
  };

  return <div className="h-fit w-full">{renderCurrentStep()}</div>;
};

export default MultiStepForm;
