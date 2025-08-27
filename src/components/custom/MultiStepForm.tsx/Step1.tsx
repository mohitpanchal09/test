"use client";
import React from "react";
import { motion } from "framer-motion";
import StepIndicator from "./StepIndicator";
import OptionButton from "./OptionButton";
import { useFormStore } from "@/store/useFormStore";

const Step1: React.FC = () => {
  const { formData, setGoal, nextStep } = useFormStore();
  const goals = ["Weight Loss", "Weight Maintenance", "Gain Muscle", "Detox Cut Diet"];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-6 sm:p-8 w-[100%] lg:w-[70%] border-1 border-gray-100"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(120px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <StepIndicator currentStep={formData.currentStep} totalSteps={4} />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-left mb-2">
          Your Food Delivery Plan
        </h1>
        <div className="mb-8">
          <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">
            What's your goal?
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {goals.map((goal) => (
              <motion.div key={goal} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                <OptionButton
                  label={goal}
                  isSelected={formData.goal === goal}
                  onClick={() => setGoal(goal)}
                  disabled={formData.selectedClusterId === null}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={nextStep}
          disabled={!formData.goal}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-base sm:text-lg transition-all duration-200 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Continue
          <span>→</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Step1;
