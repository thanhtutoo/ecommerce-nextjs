import { useEffect } from "react";
import { useRouter } from "next/router";

import { useProductsStore } from "@/stores/useProductsStore";
import ProductDetails from "@/components/products/ProductDetails";
import AppContainer from "@/components/ui/AppContainer";
import Loading from "@/components/ui/Loading";

export default function ProductDetail() {
  const { productDetail, isLoading, error, fetchProductDetail } =
    useProductsStore();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      fetchProductDetail(id as string);
    }
  }, [fetchProductDetail, id]);

  return (
    <AppContainer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        {isLoading ? <Loading /> : <ProductDetails product={productDetail} />}
      </main>
    </AppContainer>
  );
}
