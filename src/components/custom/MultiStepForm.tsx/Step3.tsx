"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import OptionButton from "./OptionButton";
import StepIndicator from "./StepIndicator";

interface Step3Props {
  selectedDuration: string | null;
  selectedMeals: string | null;
  selectedDietType: string | null;
  selectedMealType: string[];
  onDurationSelect: (duration: string) => void;
  onMealsSelect: (meals: string) => void;
  onDietTypeSelect: (type: string) => void;
  onMealTypeSelect: (type: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const Step3: React.FC<Step3Props> = ({
  selectedDuration,
  selectedMeals,
  selectedDietType,
  selectedMealType,
  onDurationSelect,
  onMealsSelect,
  onDietTypeSelect,
  onMealTypeSelect,
  onBack,
  onNext,
}) => {
  const durations = [
    { label: "3 Days Trial", value: "3d" },
    { label: "2 Weeks", value: "2w" },
    { label: "4 Weeks", value: "4w" },
  ];
  const mealCounts = [
    { label: "1 Meal", value: "1" },
    { label: "2 Meals", value: "2" },
    { label: "3 Meals", value: "3" },
    { label: "4 Meals", value: "4" },
  ];
  const dietTypes = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non Vegetarian", value: "non_vegetarian" },
    { label: "Eggetarian", value: "eggetarian" },
  ];
  const mealTypes = [
    { label: "Breakfast", value: "breakfast" },
    { label: "Lunch", value: "lunch" },
    { label: "Evening Snack", value: "evening_snack" },
    { label: "Dinner", value: "dinner" },
  ];

  const getSelectedDurationText = () => {
    if (selectedDuration === "3d") return "3 Day Trial";
    if (selectedDuration === "2w") return "2 Weeks";
    if (selectedDuration === "4w") return "4 Weeks";
    return selectedDuration;
  };

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
        <StepIndicator currentStep={3} totalSteps={4} />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-left mb-2">
          Make your Plan!
        </h1>
        <div className="space-y-6 sm:space-y-8">
          {/* Duration Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              How many days you want to subscribe?
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
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
              {durations.map((duration, i) => (
                <motion.div key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                  <OptionButton
                    label={duration.label}
                    isSelected={selectedDuration === duration.value}
                    onClick={() => onDurationSelect(duration.value)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Meals per day - shown after duration selection */}
          {selectedDuration && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                How many meals per day?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {getSelectedDurationText()}
              </p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
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
                {mealCounts.map((meal, i) => (
                  <motion.div key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <OptionButton
                      label={meal.label}
                      isSelected={selectedMeals === meal.value}
                      onClick={() => onMealsSelect(meal.value)}
                      variant="small"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Diet type - shown after meal selection */}
          {selectedMeals && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                Are you Vegetarian or Non Vegetarian?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {getSelectedDurationText()} | {selectedMeals} {selectedMeals === "1" ? "meal" : "meals"}
              </p>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
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
                {dietTypes.map((type, i) => (
                  <motion.div key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <OptionButton
                      label={type.label}
                      isSelected={selectedDietType === type.value}
                      onClick={() => onDietTypeSelect(type.value)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Meal type selection - shown after diet type selection */}
          {selectedDietType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                Choose your {selectedMeals} {selectedMeals === "1" ? "meal" : "meals"} for each day!
              </h2>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
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
                {mealTypes.map((type, i) => (
                  <motion.div key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <OptionButton
                      label={type.label}
                      isSelected={selectedMealType.includes(type.value)}
                      onClick={() => onMealTypeSelect(type.value)}
                      variant="small"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Price display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 sm:mt-8 bg-black text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 w-fit flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">₹ 0.00</span>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between mt-6 sm:mt-8"
        >
          <button
            onClick={onBack}
            className="bg-white text-gray-700 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onNext}
            disabled={!selectedMealType || selectedMealType.length === 0}
            className="bg-white text-gray-700 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step3;
