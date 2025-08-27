"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import OptionButton from "./OptionButton";
import StepIndicator from "./StepIndicator";
import { useFormStore } from "@/store/useFormStore";
import { useMealSubscriptionsStore } from "@/store/useMealSubscriptionStore";

const Step3: React.FC = () => {
  const {
    formData: {
      duration: selectedDuration,
      meals: selectedMeals,
      dietType: selectedDietType,
      mealType: selectedMealType,
    },
    setDuration,
    setMeals,
    setDietType,
    toggleMealType,
    prevStep,
    nextStep,
  } = useFormStore();

  const { subscriptions } = useMealSubscriptionsStore();

  // ---------------- PRICE CALCULATION ----------------
  const price = useMemo(() => {
    if (
      !selectedDuration ||
      !selectedMeals ||
      !selectedDietType ||
      selectedMealType.length === 0
    ) {
      return 0;
    }

    // Find active subscription (assuming single subscription for now)
    const subscription = subscriptions.find(
      (sub) =>
        sub.cluster_id?._id ===
        useFormStore.getState().formData.selectedClusterId
    );
    console.log("🚀 ~ Step3 ~ subscription:", subscription);
    if (!subscription) return 0;

    // Find matching duration pricing
    const durationPricing = subscription.duration_pricing.find((d) => {
      if (selectedDuration === "3d")
        return d.duration_value === 3 && d.duration_type === "days";
      if (selectedDuration === "2w")
        return d.duration_value === 2 && d.duration_type === "weeks";
      if (selectedDuration === "4w")
        return d.duration_value === 4 && d.duration_type === "weeks";
      return false;
    });

    if (!durationPricing) return 0;

    // Base meal price calculation
    const totalMeals =
      parseInt(selectedMeals) *
      durationPricing.duration_value *
      (durationPricing.duration_type === "weeks" ? 7 : 1);
    const dietKey =
      selectedDietType === "vegetarian"
        ? "veg"
        : selectedDietType === "non_vegetarian"
        ? "non_veg"
        : "egg"; // mapping eggetarian → egg

    let basePrice = 0;
    selectedMealType.forEach((mealTime) => {
      const mealPrice =
        durationPricing.meal_time_pricing[mealTime]?.[dietKey] || 0;
      basePrice +=
        mealPrice * (parseInt(selectedMeals) / selectedMealType.length); // distribute meals
    });

    return basePrice;
  }, [
    subscriptions,
    selectedDuration,
    selectedMeals,
    selectedDietType,
    selectedMealType,
  ]);

  // ---------------- UI Options ----------------
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
    { label: "Vegetarian", value: "veg" },
    { label: "Non Vegetarian", value: "non_veg" },
    { label: "Eggetarian", value: "egg" },
  ];
  const mealTypes = [
    { label: "Breakfast", value: "breakfast" },
    { label: "Lunch", value: "lunch" },
    { label: "Evening Snack", value: "evening" },
    { label: "Dinner", value: "dinner" },
  ];

  const getSelectedDurationText = () => {
    if (selectedDuration === "3d") return "3 Day Trial";
    if (selectedDuration === "2w") return "2 Weeks";
    if (selectedDuration === "4w") return "4 Weeks";
    return selectedDuration;
  };

  // ---------------- RENDER ----------------
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

        {/* ---------------- SELECTIONS ---------------- */}
        <div className="space-y-6 sm:space-y-8">
          {/* Duration */}
          <motion.div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              How many days you want to subscribe?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {durations.map((duration, i) => (
                <OptionButton
                  key={i}
                  label={duration.label}
                  isSelected={selectedDuration === duration.value}
                  onClick={() => setDuration(duration.value)}
                />
              ))}
            </div>
          </motion.div>

          {/* Meals */}
          {selectedDuration && (
            <motion.div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                How many meals per day?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {getSelectedDurationText()}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {mealCounts.map((meal, i) => (
                  <OptionButton
                    key={i}
                    label={meal.label}
                    isSelected={selectedMeals === meal.value}
                    onClick={() => setMeals(meal.value)}
                    variant="small"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Diet */}
          {selectedMeals && (
            <motion.div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                Are you Vegetarian or Non Vegetarian?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {getSelectedDurationText()} | {selectedMeals}{" "}
                {selectedMeals === "1" ? "meal" : "meals"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {dietTypes.map((type, i) => (
                  <OptionButton
                    key={i}
                    label={type.label}
                    isSelected={selectedDietType === type.value}
                    onClick={() => setDietType(type.value)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Meal Types */}
          {selectedDietType && (
            <motion.div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                Choose your {selectedMeals}{" "}
                {selectedMeals === "1" ? "meal" : "meals"} for each day!
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {mealTypes.map((type, i) => (
                  <OptionButton
                    key={i}
                    label={type.label}
                    isSelected={selectedMealType.includes(type.value)}
                    onClick={() => {
                      console.log("🚀 ~ toggleMealType ~ type.value:", type.value);
                      console.log('sele',selectedMealType)
                      toggleMealType(type.value);
                    }}
                    variant="small"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ---------------- PRICE ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 sm:mt-8 bg-black text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 w-fit flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">
            ₹ {price.toFixed(2)}
          </span>
        </motion.div>

        {/* ---------------- NAVIGATION ---------------- */}
        <motion.div className="flex items-center justify-between mt-6 sm:mt-8">
          <button
            onClick={prevStep}
            className="bg-white text-gray-700 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextStep}
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
