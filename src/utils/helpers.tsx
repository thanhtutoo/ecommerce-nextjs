import { Query } from "@/stores/useProductsStore";
import qs from "query-string";

export const getFilterUrl = (filters: Query): string => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

  if (filters.category && filters.category !== "all") {
    url = url + `/category/${filters.category}`;
  } else {
    url = url + "?" + qs.stringify(filters);
  }
  return url;
};
