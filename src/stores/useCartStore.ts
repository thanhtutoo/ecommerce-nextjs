import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "../types";

interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

export interface CartStore extends State {
  addToCart: (Item: Product, quantity: number) => void;
  removeFromCart: (Item: Product) => void;
  decreaseQuantityFromCart: (Item: Product) => void;
  emptyCart: () => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product: Product, quantity = 1) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + quantity }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));

          toast.success("Item quantity updated in cart.");
        } else {
          const updatedCart = [...cart, { ...product, quantity: quantity }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));

          toast.success("Item quantity updated in cart.");
        }
      },
      decreaseQuantityFromCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) - 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - product.price,
          }));
        }
      },
      removeFromCart: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        }));
      },
      emptyCart: () => set({ cart: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
