"use client";
import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import StepIndicator from "./StepIndicator";
import OptionButton from "./OptionButton";

interface Step2Props {
  selectedGoal: string;
  selectedDiet: string | null;
  onDietSelect: (diet: string) => void;
  onContinue: () => void;
}

const Step2: React.FC<Step2Props> = ({
  selectedGoal,
  selectedDiet,
  onDietSelect,
  onContinue,
}) => {
  const diets = [
    "Balanced Diet",
    "Keto Diet",
    "Gluten Free Diet",
    "High Protein",
    "Vegan Diet",
    "Let our Expert Nutritionist Decide",
  ];

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
        <StepIndicator currentStep={2} totalSteps={4} />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-left mb-2">
          Your Food Delivery Plan
        </h1>
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
            What's your goal?
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-100 border border-green-300 rounded-lg px-3 sm:px-4 py-2 text-green-800 font-medium text-sm sm:text-base"
          >
            {selectedGoal}
          </motion.div>
        </div>
        <div className="mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6">
            Preferred Diet Technique?
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
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
            {diets.map((diet) => (
              <motion.div key={diet} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                <OptionButton
                  label={diet}
                  isSelected={selectedDiet === diet}
                  onClick={() => onDietSelect(diet)}
                />
              </motion.div>
            ))}
            {selectedDiet === "Balanced Diet" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="sm:col-span-2 md:col-span-3 mt-2 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3"
              >
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-blue-800">
                  Moderate carb high protein low fat diet to boost fat loss and preserve muscle mass. Flexible way to lose weight. Target: 5–8kgs fat loss in a month.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
        <button
          onClick={onContinue}
          disabled={!selectedDiet}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-base sm:text-lg transition-all duration-200 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Continue
          <span>→</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Step2;
