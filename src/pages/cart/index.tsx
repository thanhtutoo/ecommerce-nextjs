import { useEffect, useState } from "react";

import Header from "@/components/ui/Header";
import Drawer from "@/components/ui/Drawer";
import Cart from "@/components/minicart/Cart";
import ProductList from "@/components/products/ProductList";
import { useRouter } from "next/router";

import { useProductsStore } from "@/stores/useProductsStore";
import ProductDetails from "@/components/products/ProductDetails";
import AppContainer from "@/components/ui/AppContainer";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
import CartItem from "@/components/cart/CartItem";

export default function ProductDetail() {
  //   const { productDetail, isLoading, error, fetchProductDetail } =
  //     useProductsStore();
  //   const router = useRouter();
  //   const id = router.query.id;

  //   useEffect(() => {
  //     if (id) {
  //       fetchProductDetail(id as string);
  //     }
  //   }, [fetchProductDetail, id]);
  const cart = useFromStore(useCartStore, (state) => state.cart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <AppContainer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        <section>
          <h3 className="text-2xl font-bold mb-4"> Cart Page</h3>
          <ul>
            {cart?.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </section>
      </main>
    </AppContainer>
  );
}
