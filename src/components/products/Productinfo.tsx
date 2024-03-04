"use client";

import Button from "@/components/ui/Button";
import QuantityCounter from "@/components/ui/QuantityCounter";
import { Product } from "@/types";

import styles from "./styles.module.css";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";

interface InfoProps {
  data: Product;
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1>

      <div className="pt-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data?.description}
        </h2>

        <div className="mt-4 flex items-baseline">
          <div className="text-gray-900 text-lg font-semibold">
            {/* <Currency value={data?.price} /> */}
          </div>
          <div className="ml-2 text-sm text-green-600 font-medium bg-green-200 px-2 py-1 rounded-full">
            {`${data?.discountPercentage}% off`}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-md text-gray-900">Rating: {data?.rating}</div>
            <div className="ml-2 text-md text-gray-500">
              ({data?.stock} in stock)
            </div>
          </div>
          <div className="mt-1 text-md text-gray-500">Brand: {data?.brand}</div>
          <div className="mt-1 text-md text-gray-500">
            Category: {data?.category}
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-100	mt-20 rounded	flex	">
        <span className="items-center flex flex-1 text-xl	">Quantity</span>
        <div className=" flex-1">
          <QuantityCounter setQuantity={setQuantity} quantity={quantity} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={() => addToCart(data, quantity)}
          className="flex items-center gap-x-2"
          data-testid={"product-add-to-cart"}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
