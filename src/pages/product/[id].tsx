import { useEffect, useState } from "react";

import Header from "@/components/ui/Header";
import Drawer from "@/components/ui/Drawer";
import Cart from "@/components/minicart/Cart";
import ProductList from "@/components/products/ProductList";
import { useRouter } from "next/router";

import { useProductsStore } from "@/stores/useProductsStore";
import ProductDetails from "@/components/products/ProductDetails";

export default function ProductDetail() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { productDetail, isLoading, error, fetchProductDetail } =
    useProductsStore();
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  useEffect(() => {
    if (id) {
      fetchProductDetail(id as string);
    }
  }, [fetchProductDetail, id]);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header onCartIconClick={handleCartIconClick} />
      <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
        <Cart />
      </Drawer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductDetails product={productDetail} />
        )}
      </main>
    </>
  );
}
