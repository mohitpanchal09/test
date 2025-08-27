"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OptionButton from "./OptionButton";
import StepIndicator from "./StepIndicator";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { useFormStore } from "@/store/useFormStore";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



const PersonalInfoStep: React.FC = () => {
  const {
    formData: {
      goal: selectedGoal,
      gender: selectedGender,
      age: selectedAge,
      weight: selectedWeight,
      heightFeet: selectedHeightFeet,
      heightInches: selectedHeightInches,
    },
    setGender,
    setAge,
    setWeight,
    setHeightFeet,
    setHeightInches,
    prevStep,
    nextStep,
  } = useFormStore();

  const genders = ["Male", "Female", "Other"];
  const [feetValue, setFeetValue] = React.useState<number[]>([3]);
  const [inchesValue, setInchesValue] = React.useState<number[]>([0]);

  React.useEffect(() => {
    setHeightFeet(feetValue[0].toString());
    setHeightInches(inchesValue[0].toString());
  }, [feetValue, inchesValue]);

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
        <StepIndicator currentStep={2.5} totalSteps={4} />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-left mb-2">
          Tell us about yourself!
        </h1>
        <div className="space-y-6 sm:space-y-8">
          {/* Gender Selection */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
              Your Gender
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {genders.map((gender) => (
                <OptionButton
                  key={gender}
                  label={gender}
                  isSelected={selectedGender === gender}
                  onClick={() => setGender(gender)}
                />
              ))}
            </div>
          </motion.div>
          <div className="flex flex-wrap gap-6">
            {/* Age Selection */}
            <AnimatePresence>
              {selectedGender && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    Your Age
                  </h2>
                  <div className="flex gap-4 items-center">
                    <Input
                      type="number"
                      placeholder="Enter Age"
                      value={selectedAge || ""}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-[180px] bg-white"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Weight Selection */}
            <AnimatePresence>
              {selectedAge && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    Your Weight in Kgs
                  </h2>
                  <div className="flex gap-4 items-center">
                    <Input
                      type="number"
                      placeholder="Enter Weight"
                      value={selectedWeight || ""}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-[180px] bg-white"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Height Selection */}
          <AnimatePresence>
            {selectedWeight && (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                  Your Height
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">in Feet</p>
                    <div className="flex gap-4 items-center">
                      <Slider
                        defaultValue={[3]}
                        min={3}
                        max={9}
                        step={1}
                        value={feetValue}
                        onValueChange={setFeetValue}
                        className="w-[200px]"
                      />
                      <Input
                        type="number"
                        placeholder="Feet"
                        value={feetValue[0].toString()}
                        onChange={(e) => setFeetValue([Number(e.target.value)])}
                        className="w-[100px] bg-white"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{feetValue[0]} ft</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">in Inches</p>
                    <div className="flex gap-4 items-center">
                      <Slider
                        defaultValue={[0]}
                        min={0}
                        max={11}
                        step={1}
                        value={inchesValue}
                        onValueChange={setInchesValue}
                        className="w-[200px]"
                      />
                      <Input
                        type="number"
                        placeholder="Inches"
                        value={inchesValue[0].toString()}
                        onChange={(e) => setInchesValue([Number(e.target.value)])}
                        className="w-[100px] bg-white"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{inchesValue[0]} in</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Navigation buttons */}
        <motion.div
          className="flex items-center justify-between mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={prevStep}
            className="bg-white text-gray-700 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextStep}
            disabled={!selectedHeightInches}
            className="bg-white text-gray-700 p-2 sm:p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalInfoStep;
