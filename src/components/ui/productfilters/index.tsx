import { FC, useEffect, useState, useTransition } from "react";
import Select from "@/components/ui/Select";
import { useCategoryStore } from "@/stores/useCategoryStore";
import Category from "./Category";
import Rating from "./Rating";

const ProductFilters: FC = ({}) => {
  const { categories, isLoading, error, fetchCategoryData } =
    useCategoryStore();

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  return (
    <div className="max-w-[360px] md:max-w-[200px] mx-auto w-full">
      <Category
        categories={categories}
        value="all"
        onChange={(category) => console.log(category)}
      />
      <Rating value={3} onChange={(category) => console.log(category)} />
    </div>
  );
};

export default ProductFilters;
