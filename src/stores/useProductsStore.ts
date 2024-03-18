import { create } from "zustand";

import { Product } from "../components/products/types";
import { getFilterUrl } from "@/utils/helpers";
interface State {
  products: Product[];
  isLoading: boolean;
  error: any;
  productDetail: Product;
}

export interface Query {
  limit?: number;
  skip?: number;
  price?: [number, number];
  category?: string;
  stars?: number;
}

interface Actions {
  fetchData: (query: Query) => Promise<void>;
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
  fetchData: async (query: Query) => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetch(getFilterUrl(query));
      const data = await response.json();

      if (response.ok) {
        if (query.stars) {
          const selectedStars = Number(query.stars);
          data.products = data.products.filter((product: Product) => {
            return (
              product.rating >= selectedStars &&
              product.rating < selectedStars + 1
            );
          });
        }
        if (query.price) {
          const [min, max] = query.price;
          data.products = data.products.filter((product: Product) => {
            return product.price >= min && product.price <= max;
          });
        }
        set({ products: data.products, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error, isLoading: false });
    }
  },
  fetchProductDetail: async (id: string) => {
    try {
      set({ isLoading: true, error: null });

      const url = `/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      set({ productDetail: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
