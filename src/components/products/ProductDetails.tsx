import { Product } from "@/components/products/types";
import Gallery from "../gallery";
import ProductInfo from "./Productinfo";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 ">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product?.images} title={product?.title} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo data={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
