"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import StepIndicator from "./StepIndicator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Step4Props {
  name: string | null;
  phone: string | null;
  email: string | null;
  state: string | null;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  onEmailChange: (email: string) => void;
  onStateChange: (state: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const Step4: React.FC<Step4Props> = ({
  name,
  phone,
  email,
  state,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  onStateChange,
  onBack,
  onNext,
}) => {
  const states = ["Delhi NCR", "Bangalore", "Mumbai"];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-6 sm:p-8 w-[100%] lg:w-[70%] border border-gray-100"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(120px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <StepIndicator currentStep={4} totalSteps={4} />
        <h1 className="text-xl font-bold mb-6">👤 Personal Details</h1>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Input
              type="text"
              value={name || ""}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Name"
              className="bg-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Input
              type="tel"
              value={phone || ""}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="Phone"
              className="bg-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Input
              type="email"
              value={email || ""}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Email Address"
              className="bg-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-semibold mb-2">State *</p>
            <motion.div
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
              className="flex gap-6"
            >
              <RadioGroup
                value={state || ""}
                onValueChange={onStateChange}
                className="flex gap-6"
              >
                {states.map((s) => (
                  <motion.div
                    key={s}
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem value={s} id={s} className="bg-white" />
                    <Label htmlFor={s}>{s}</Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between mt-6"
        >
          <button
            onClick={onBack}
            className="bg-white text-gray-700 p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={onNext}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            <ArrowRight />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step4;
