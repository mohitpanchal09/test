"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { apiClient } from "@/lib/apiClient";
import { useProgramsStore } from "@/store/useProgramStore";
import { getSessionId } from "@/app/actions/session";

export default function PlainDetails() {
  const { planId } = useParams<{ planId: string }>();
  const { programs } = useProgramsStore();
  const { setCart } = useCartStore();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);
  const [product, setProduct] = useState<any>({
    name: "",
    price: 0,
    description: "",
    images: ["/assets/default.png"],
  });

  useEffect(() => {
    const plan = programs.find((p) => p._id === planId);
    if (plan) {
      setProduct({
        name: plan.name,
        price: plan.memberships[0]?.final_amount || 0,
        description: plan.description,
        images: [plan.thumbnail_url || "/assets/default.png"],
      });
    }
  }, [planId, programs]);

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
    const selected = programs
      .find((p) => p._id === planId)
      ?.memberships.find((m) => m._id === value);
    setSelectedPlanDetails(selected);
    setProduct((prev: any) => ({
      ...prev,
      price: selected?.final_amount || 0,
    }));
  };

  const handleAddToCart = async () => {
    if (!selectedPlan) {
      alert("Please select a plan");
      return;
    }
    try {
      const sessionId = await getSessionId();
      console.log("adasdfsfd", product);
      const res = await apiClient.post(`/guest-cart/${sessionId}/programs`, {
        program_id: planId,
        membership_id: selectedPlan,
      });
      setCart(res.data.data);
      alert("Plan added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add plan to cart.");
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Background Glow Right */}
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute right-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="p-0 lg:p-12 flex items-center justify-center relative overflow-hidden">
              {/* <div className="relative z-10 mb-auto bg-gray-200 rounded-lg flex items-center justify-center w-[500px] h-[500px]"> */}
              <Image
                src={product.images?.[0] || "/assets/default.png"}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
              />
              {/* </div> */}
            </div>
            {/* Product Info */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="text-3xl lg:text-4xl font-bold text-[#009245] mb-6">
                ₹ {product.price.toFixed(2)}
              </div>
              <Separator className="my-6" />
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              {/* Plan Dropdown */}
              <div className="mb-8">
                <Select onValueChange={handlePlanChange}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Choose Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs
                      .find((p) => p._id === planId)
                      ?.memberships.map((membership) => (
                        <SelectItem key={membership._id} value={membership._id}>
                          {membership.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-fit bg-[#03803F] cursor-pointer hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-xl transition-all duration-200 shadow-lg text-lg"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Background Glow Left */}
      <div
        className="w-[300px] h-[300px] bg-[#B3FF00] blur-[120px] absolute left-0 bottom-0 -z-0"
        style={{ borderRadius: "377px" }}
      ></div>
    </div>
  );
}
