import { FC, useCallback, useEffect, useState, useTransition } from "react";
import Select from "@/components/ui/Select";
import { useCategoryStore } from "@/stores/useCategoryStore";
import Category from "./Category";
import Rating from "./Rating";
import PriceRange from "./PriceRange";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button";

interface Props {
  handleQueryChange: (newQueryValues: {
    category?: string;
    price?: [number, number];
    stars?: number;
  }) => void;
}
const ProductFilters: FC<Props> = ({ handleQueryChange }) => {
  const { categories, isLoading, error, fetchCategoryData } =
    useCategoryStore();
  const searchParams = useSearchParams();
  const query = qs.parse(searchParams.toString());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStar, setSelecedStar] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategoryData();
    }
  }, [categories.length, fetchCategoryData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleQueryChange({ category });
  };

  const handlePriceChange = (price) => {
    handleQueryChange({ price });
  };

  const handleStarsChange = (stars: number) => {
    setSelecedStar(stars);
    handleQueryChange({ stars });
  };

  const handleResetButton = () => {
    setSelectedCategory("");
    setSelecedStar(0);
    router.push(window.location.origin);
  };

  return (
    <div className=" mx-auto w-full flex gap-2 mb-10">
      <Category
        categories={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <Rating selectedStar={selectedStar} onChange={handleStarsChange} />
      <PriceRange
        value={Array.isArray(query.price) ? query.price.map(Number) : [0, 1000]}
        onChange={handlePriceChange}
      />
      <div className="flex items-center mt-6">
        <Button
          onClick={handleResetButton}
          className="max-w-[360px] mx-auto w-full rounded-md h-10 flex items-center"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductFilters;
