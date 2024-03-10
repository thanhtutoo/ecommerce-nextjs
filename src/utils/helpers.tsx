import { Product } from "@/components/products/types";
import { Query } from "@/stores/useProductsStore";
import qs from "query-string";

export const getFilterUrl = (filters: Query): string => {
  let url = `api/products`;

  if (filters.category && filters.category !== "all") {
    url = url + `/category/${filters.category}`;
  } else {
    url = url + "?" + qs.stringify(filters);
  }
  return url;
};

export function getProductsPriceRange(products: Product[]): [number, number] {
  if (!products) {
    return [0, 0];
  }
  if (!products.length) {
    return [0, 0];
  }

  return products.reduce(
    (acc, cur) => {
      return [
        cur.price < acc[0] ? cur.price : acc[0],
        cur.price > acc[1] ? cur.price : acc[1],
      ];
    },
    [products[0].price, products[0].price]
  );
}
