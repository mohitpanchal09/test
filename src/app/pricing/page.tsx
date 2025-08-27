import Form from "@/components/custom/MultiStepForm.tsx/Form";
import DetailsAndCards from "@/components/custom/Pricing/DetailsAndCards";
import FoodYouLove from "@/components/custom/Pricing/FoodYouLove";
import PricingBannerCarousel from "@/components/custom/Pricing/PricingBannerCarousel";
import { fetchClustersAndPricing } from "@/services/clusterService";
import React from "react";

type Props = {};

async function Page({}: Props) {
  const data = await fetchClustersAndPricing();
  return (
    <div className="overflow-hidden">
      <PricingBannerCarousel />
      <DetailsAndCards />
      <Form data={data}/>
      <FoodYouLove />
    </div>
  );
}

export default Page;
