import AppContainer from "@/components/ui/AppContainer";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
import CartItem from "@/components/cart/CartItem";
import Button from "@/components/ui/Button";

export default function ProductDetail() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const totalPrice = useFromStore(useCartStore, (state) => state.totalPrice);

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
                    <div className="font-semibold">
                      ${Number(totalPrice).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    //   onClick={onCheckout}
                    //   disabled={items.length === 0}
                    className="mt-6  w-full rounded-md"
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
