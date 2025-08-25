import BannerCarousel from "@/components/custom/BannerCarousel/BannerCarousel";
import Categories from "@/components/custom/Category/Categories";
import ProductCarousel from "@/components/custom/Products/ProductCarousel";
import ProductCarouselCard from "@/components/custom/Products/ProductCarouselCard";
import ScrollingText from "@/components/custom/ScrollingText/ScrollingText";
import { bannerCarouselData } from "@/lib/bannerData";
import { productCarouselData } from "@/lib/productsCarouselData";
import React from "react";

type Props = {};

function Title() {
  return (
    <h1 className="relative text-4xl md:text-5xl font-bold text-lime-400 drop-shadow-md z-10">
      #Parashop
    </h1>
  );
}

function Page({}: Props) {
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

      <ProductCarousel data={productCarouselData} category="Juices" />

      <ProductCarousel data={productCarouselData} category="Smoothies" />

      <div className="flex flex-col justify-center items-center py-12 ">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
          {"Omega-3 Fortified Chocolates"}
        </h2>
        <div className="relative">
          <ProductCarouselCard
            title="Omega-3 Fortified Chocolates"
            href="/assets/products/juice.png"
            price={125}
          />
        </div>
      </div>

      <ProductCarousel data={productCarouselData} category="Herbal Teas" />

      <ProductCarousel data={productCarouselData} category="Desserts" />
    </div>
  );
}

export default Page;
