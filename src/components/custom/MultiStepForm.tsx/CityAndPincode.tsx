"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/store/useFormStore";
import { useMealSubscriptionsStore } from "@/store/useMealSubscriptionStore";
import React, { useMemo, useState } from "react";

function CityAndPincode() {
  const { subscriptions } = useMealSubscriptionsStore();
  const setSelectedClusterId = useFormStore(
    (state) => state.setSelectedClusterId
  );
  const setSelectedSubscription = useFormStore(
    (state) => state.setSelectedSubscription
  );
  const {selectedSubscription} = useFormStore((state) => state.formData);
  console.log("🚀 ~ CityAndPincode ~ selectedSubscription:", selectedSubscription)

  // store the selected cluster ID
  const [selectedCluster, setSelectedCluster] = useState("");

  // derive unique cities from subscriptions
  const cities = useMemo(() => {
    const unique = new Map<string, string>();
    subscriptions.forEach((sub) => {
      if (sub.cluster_id?.city) {
        unique.set(sub.cluster_id._id, sub.cluster_id.city);
      }
    });
    return Array.from(unique, ([value, label]) => ({ value, label }));
  }, [subscriptions]);

  // handle selection change
  const handleCityChange = (clusterId: string) => {
    setSelectedCluster(clusterId);      // update local state
    setSelectedClusterId(clusterId);    // update Zustand store

    const firstSubscription = subscriptions.find(
      (sub) => sub.cluster_id?._id === clusterId
    );
    if (firstSubscription) {
      setSelectedSubscription(firstSubscription); // ✅ auto-pick subscription
    }
  };

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center px-4 py-8 z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#009245] font-medium text-center">
        Choose your City
      </h1>

      <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center w-full max-w-4xl">
        {/* Pincode Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Input
            placeholder="Enter Pincode"
            className="shadow-lg w-full sm:w-48 bg-white"
          />
          <Button className="bg-[#0A9F35] hover:bg-[#08852D] text-white w-full sm:w-auto">
            Enter Pincode
          </Button>
        </div>

        {/* City Selection Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Select onValueChange={handleCityChange} value={selectedCluster}>
            <SelectTrigger className="w-full sm:w-48 shadow-lg bg-white">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="bg-[#0A9F35] hover:bg-[#08852D] text-white w-full sm:w-auto">
            Choose City
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CityAndPincode;
