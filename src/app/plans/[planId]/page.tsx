import PlainDetails from "@/components/custom/Plans/PlanDetails";
import React from "react";


async function page({
  params,
}: {
  params: Promise<{ planId: string }>
}) {
  return (
    <div>
      <PlainDetails/>
    </div>
  );
}

export default page;
