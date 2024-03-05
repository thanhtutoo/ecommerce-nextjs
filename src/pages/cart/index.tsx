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
import Button from "@/components/ui/Button";

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
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-8">
              <ul>
                {cart?.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>
                <div className="mt-6 space-y-4">
                  <div
                    className="flex items-center justify-between border-t border-gray-200 pt-4"
                    data-testid="order-summary"
                  >
                    <div className="text-base font-medium text-gray-900">
                      Order total
                    </div>
                    <div className="font-semibold">${total.toFixed(2)}</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    //   onClick={onCheckout}
                    //   disabled={items.length === 0}
                    className="w-full mt-6"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppContainer>
  );
}
