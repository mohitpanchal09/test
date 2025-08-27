"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import StepIndicator from "./StepIndicator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/store/useFormStore";
import { useCartStore } from "@/store/useCartStore";
import { apiClient } from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { getSessionId } from "@/app/actions/session";

const Step4: React.FC = () => {
  const {
    formData: { name, phone, email, state },
    setName,
    setPhone,
    setEmail,
    setState,
    prevStep,
    nextStep,
  } = useFormStore();
  const { cart, setCart } = useCartStore();
  const { formData } = useFormStore();
  const router = useRouter();

  const states = ["Delhi NCR", "Bangalore", "Mumbai"];

  const handleNext = async () => {
    try {
      // Prepare the payload
      const payload = {
        item_type: "meal_subscription",
        item_details: {
          meal_subscription_id: formData.selectedSubscription?.id,
          duration_value: parseInt(formData.duration || "0"),
          selected_meals: formData.mealType.map((mealType) => ({
            meal_time: mealType, // Adjust as per your logic
            meal_type: formData.dietType || "veg", // Adjust as per your logic
          })),
        },
      };

      const sessionId = await getSessionId()
      console.log("🚀 ~ handleNext ~ sessionId:", sessionId)

      // Call the API
      const response = await apiClient.post(`/guest-cart/${sessionId}`,
        payload
      );
      console.log("🚀 ~ handleNext ~ response:", response.data.data)

      if (response.data) {
        console.log("Item added to cart:", response.data);
        // Update the cart in Zustand
        setCart(response.data.data);
        // Redirect to cart page
        router.push("/cart");
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="bg-white"
            />
          </motion.div>
          {/* <motion.div
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
                onValueChange={setState}
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
          </motion.div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between mt-6"
        >
          <button
            onClick={prevStep}
            className="bg-white text-gray-700 p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
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
