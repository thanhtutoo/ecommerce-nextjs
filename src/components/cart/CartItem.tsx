import { FaTrashAlt } from "react-icons/fa";

import { Product } from "../../types";
import Image from "next/image";
import { useCartStore } from "../../stores/useCartStore";
import { useState } from "react";
import IconButton from "../ui/IconButton";

interface Props {
  product: Product;
}

export default function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [quantity, setQuantity] = useState(product.quantity);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseFromCart = useCartStore(
    (state) => state.decreaseQuantityFromCart
  );

  const handleOnIncrease = () => {
    addToCart(product, 1);
    setQuantity((prev) => Number(prev) + 1);
  };
  const handleOnDecrease = () => {
    if (quantity === 1) {
      removeFromCart(product);
      return;
    }
    decreaseFromCart(product);
    setQuantity((prev) => Number(prev) - 1);
  };

  return (
    <li className="gap-4 mb-2 shadow-md p-4 hover:shadow-xl">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 md:flex">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={100}
            height={100}
            className="h-10 w-10 rounded-full mr-4"
          />
          <div className="flex flex-col basis-3/5">
            <span className="font-bold flex-1">{product.title}</span>
            <span className="text-gray-600 font-bold">
              <span className="text-gray-600 font-bold">${product.price}</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="flex sm:mt-5 sm:mr-5">
            <IconButton
              onClick={handleOnDecrease}
              icon={
                <Image
                  src="/images/icons-minus.png"
                  width="24"
                  height="24"
                  alt="plus"
                />
              }
              name="decrease-btn"
              className="w-6"
              data-testid={"cart-remove"}
            />
            <span className="px-2 flex items-center md:w-10 w-7 justify-center">
              {quantity}
            </span>
            <IconButton
              onClick={handleOnIncrease}
              icon={
                <Image
                  src="/images/icons-plus.png"
                  width="24"
                  height="24"
                  alt="plus"
                />
              }
              name="increase-btn"
              className="w-6"
              data-testid={"cart-remove"}
            />
          </div>
          <div className="flex sm:mt-5 ">
            <button
              title="Remove Item"
              className="text-red-500 hover:text-red-600 ml-4"
              onClick={() => removeFromCart(product)}
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
