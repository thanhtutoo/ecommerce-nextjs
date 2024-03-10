import { FC, useCallback, useEffect, useState, useTransition } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import Category from "./Category";
import Rating from "./Rating";
import PriceRange, { PriceRangeProps } from "./PriceRange";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button";
import { Product } from "@/components/products/types";
import { getProductsPriceRange } from "@/utils/helpers";

interface Props {
  handleQueryChange: (newQueryValues: {
    category?: string;
    price?: [number, number];
    stars?: number;
  }) => void;
  products: Product[];
}
const ProductFilters: FC<Props> = ({ handleQueryChange, products }) => {
  const { categories, isLoading, error, fetchCategoryData } =
    useCategoryStore();
  const searchParams = useSearchParams();
  const query = qs.parse(searchParams.toString());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStar, setSelecedStar] = useState<number>(0);
  const router = useRouter();
  const priceRange = getProductsPriceRange(products);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategoryData();
    }
  }, [categories.length, fetchCategoryData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleQueryChange({ category });
  };

  const handlePriceChange = (price: PriceRangeProps["value"]) => {
    handleQueryChange({ price });
  };

  const handleStarsChange = (stars: number) => {
    setSelecedStar(stars);
    handleQueryChange({ stars });
  };

  const handleResetButton = () => {
    setSelectedCategory("all");
    setSelecedStar(0);
    router.push(window.location.origin);
  };

  return (
    <div className="mx-auto w-full lg:flex gap-2 mb-10">
      <Category
        categories={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <Rating selectedStar={selectedStar} onChange={handleStarsChange} />
      <PriceRange
        value={
          (Array.isArray(query.price)
            ? query.price.map(Number)
            : priceRange) as PriceRangeProps["value"]
        }
        onChange={handlePriceChange}
      />
      <div className="flex items-center mt-6 ">
        <Button
          onClick={handleResetButton}
          className="max-w-[360px] mx-auto w-full rounded-md h-10 flex items-center justify-center"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductFilters;
