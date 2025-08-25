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
import React, { useState } from "react";

type Props = {};

// Cities data array
const cities = [
  { label: "Delhi", value: "delhi" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Bangalore", value: "bangalore" },
  { label: "Kolkata", value: "kolkata" },
  { label: "Chennai", value: "chennai" },
];

function CityAndPincode({}: Props) {
  const [selectedCity, setSelectedCity] = useState("");

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
          <Select onValueChange={(value) => setSelectedCity(value)}>
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
