import { useEffect, useState } from "react";

import ProductList from "@/components/products/ProductList";

import { useProductsStore } from "@/stores/useProductsStore";
import AppContainer from "@/components/ui/AppContainer";

export default function Home() {
  const { products, isLoading, error, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContainer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </AppContainer>
  );
}
