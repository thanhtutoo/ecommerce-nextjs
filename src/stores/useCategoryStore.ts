import { create } from "zustand";

interface State {
  categories: string[];
  isLoading: boolean;
  error: any;
}

interface Actions {
  fetchCategoryData: () => Promise<void>;
}

const INITIAL_STATE: State = {
  categories: [],
  isLoading: false,
  error: null,
};

export const useCategoryStore = create<State & Actions>((set) => ({
  categories: INITIAL_STATE.categories,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  fetchCategoryData: async () => {
    try {
      set({ isLoading: true, error: null });

      const url = `${process.env.NEXT_PUBLIC_API_URL}/products/categories`;

      const response = await fetch(url);

      const data = await response.json();
      set({ categories: data, isLoading: false });
    } catch (error) {
      console.log("error", error);
      set({ error, isLoading: false });
    }
  },
}));
