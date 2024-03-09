import { useCallback, useEffect, useState } from "react";

import ProductList from "@/components/products/ProductList";

import { useProductsStore } from "@/stores/useProductsStore";
import AppContainer from "@/components/ui/AppContainer";
import Category from "@/components/ui/productfilters/Category";
import ProductFilters from "@/components/ui/productfilters";
import { useRouter } from "next/router";
import qs from "query-string";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const { products, isLoading, error, fetchData } = useProductsStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = qs.parse(searchParams.toString());
  const [isFetched, setIsFetched] = useState(false);
  // const searchParams = useSearchParams();
  // const param = qs.parse(searchParams.toString());

  const { category, stars, price } = router.query;

  useEffect(() => {
    // console.log("fetching data");
    // if (category || stars || price) {
    //   console.log("my category", category, query);
    //   fetchData(query);
    // } else {
    console.log("products", products.length);
    if (products.length === 0 && !isFetched) {
      fetchData(query);
      setIsFetched(true);
    }
    // }
  }, [category, stars, price, fetchData, products, isFetched]);

  console.log("query", query);

  const handleQueryChange = useCallback(
    (newQueryValues: {
      category?: string;
      price?: [number, number];
      stars?: number;
    }) => {
      const newQuery = {
        ...query,
        ...newQueryValues,
      };

      const url = qs.stringifyUrl(
        {
          url: window.location.href,
          query: newQuery,
        },
        { skipNull: true }
      );

      /**
       * @todo this is triggering multiple renders.
       */
      router.push(url);
    },
    [query, router]
  );

  return (
    <AppContainer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        <ProductFilters handleQueryChange={handleQueryChange} />
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </AppContainer>
  );
}
