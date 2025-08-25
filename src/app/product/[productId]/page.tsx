import ProductDetails from "@/components/custom/Product/ProductDetails";
import RelatedProducts from "@/components/custom/Product/RelatedProducts";
import React from "react";


async function page({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  console.log("🚀 ~ page ~ params:", params)
  return (
    <div>
      <ProductDetails />
      <RelatedProducts/>
    </div>
  );
}

export default page;
