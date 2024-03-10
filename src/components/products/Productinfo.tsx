import Button from "@/components/ui/Button";
import QuantityCounter from "@/components/ui/QuantityCounter";
import { Product } from "@/components/products/types";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";

interface InfoProps {
  data: Product;
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    addToCart(data, quantity);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1>

      <div className="pt-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data?.description}
        </h2>

        <div className="mt-4 flex items-baseline">
          <div className="text-md text-gray-900 font-bold text-lg">
            {" "}
            ${data?.price}
          </div>
          <div className="text-gray-900 text-lg font-semibold"></div>
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
      <div className="mt-10">
        <div className="flex bg-gray-200 p-2 rounded-md">
          <span className="basis-9/12 flex items-center text-lg">Quantity</span>
          <div className="">
            <QuantityCounter setQuantity={setQuantity} quantity={quantity} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button
          onClick={handleAddToCart}
          className="flex mx-auto w-full rounded-md h-10 items-center justify-center"
          data-testid={"product-add-to-cart"}
          data-cy-btn="product-add-to-cart"
          role="buttonAddToCart"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
