import { create } from "zustand";

import { Product } from "../types";

interface State {
  products: Product[];
  isLoading: boolean;
  error: any;
  productDetail: Product;
}

interface Actions {
  fetchData: () => Promise<void>;
  fetchProductDetail: (id: string) => Promise<void>;
}

const INITIAL_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
  productDetail: {} as Product,
};

export const useProductsStore = create<State & Actions>((set) => ({
  products: INITIAL_STATE.products,
  productDetail: INITIAL_STATE.productDetail,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  fetchData: async () => {
    try {
      set({ isLoading: true, error: null });

      const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
      const response = await fetch(url);
      const data = await response.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      console.log("error", error);
      set({ error, isLoading: false });
    }
  },
  fetchProductDetail: async (id: string) => {
    try {
      set({ isLoading: true, error: null });

      const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      set({ productDetail: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
