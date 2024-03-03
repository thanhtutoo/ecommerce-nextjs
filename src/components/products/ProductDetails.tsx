import Image from "next/image";

import { useCartStore } from "../../stores/useCartStore";

import { Product } from "@/types.d";
import Gallery from "../gallery";
import ProductInfo from "./Productinfo";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  console.log("product", product);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 ">
      {/* <Container> */}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product?.images} title={product?.title} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo data={product} />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}
