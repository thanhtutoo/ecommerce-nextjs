import { useEffect, useState } from "react";

import ProductList from "@/components/products/ProductList";

import { useProductsStore } from "@/stores/useProductsStore";
import AppContainer from "@/components/ui/AppContainer";
import Category from "@/components/ui/productfilters/Category";
import ProductFilters from "@/components/ui/productfilters";

export default function Home() {
  const { products, isLoading, error, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContainer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        {/* <Category categories={["1", "2"]} value="1" onChange={""} /> */}
        <ProductFilters />
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </AppContainer>
  );
}
