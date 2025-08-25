import BannerCarousel from "@/components/custom/BannerCarousel/BannerCarousel";
import Categories from "@/components/custom/Category/Categories";
import ProductCarousel from "@/components/custom/Products/ProductCarousel";
import ProductCarouselCard from "@/components/custom/Products/ProductCarouselCard";
import ScrollingText from "@/components/custom/ScrollingText/ScrollingText";
import { bannerCarouselData } from "@/lib/bannerData";
import { productCarouselData } from "@/lib/productsCarouselData";
import { fetchCategoriesWithProducts } from "@/services/productService";
import React from "react";

type Props = {};

function Title() {
  return (
    <h1 className="relative text-4xl md:text-5xl font-bold text-lime-400 drop-shadow-md z-10">
      #Parashop
    </h1>
  );
}

async function Page({}: Props) {
  const res = await fetchCategoriesWithProducts()
  return (
    <div className="overflow-hidden">
      <BannerCarousel banners={bannerCarouselData} />

      {/* Uncomment if you want the dynamic banner */}
      {/* 
      <DynamicBanner
        bgImageUrl="/assets/parashopbanner.png"
        Component={Title}
      /> 
      */}

      <ScrollingText />

      <Categories />

      {res.map((item:any)=><ProductCarousel data={item.products} category={item.category.name} />)}
    </div>
  );
}

export default Page;
