import React from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../Titles/SectionTitle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchCategories } from "@/services/categoryService";

const Categories = async () => {
  const categories = await fetchCategories();

  return (
    <div className="md:py-20">
      <SectionTitle name="Shop By Category" />
      <ScrollArea className="w-full shrink-0">
        <div className="flex justify-center gap-6 px-4 py-[20px]">
          {categories.map((category: any) => (
            <CategoryCard
              key={category._id}
              title={category.name}
              href={`/products/${category._id}`}
              bgImage={category.image_url || "/assets/default-category.png"}
              overlayColor={category.overlayColor}
            />
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Categories;
