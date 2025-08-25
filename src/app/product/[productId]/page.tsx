import ProductDetails from "@/components/custom/Product/ProductDetails";
import RelatedProducts from "@/components/custom/Product/RelatedProducts";
import { fetchProductById } from "@/services/productService";
import React from "react";



async function Page({ params }: { params: Promise<{ productId: string }> }) {
  const product = await fetchProductById((await params).productId);

  if (!product) {
    return <div className="p-10 text-center text-red-500">Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
      <RelatedProducts products={product.similarProducts || []} />
    </div>
  );
}

export default Page;
