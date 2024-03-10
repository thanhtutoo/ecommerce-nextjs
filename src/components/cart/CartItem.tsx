import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

import { Product } from "../products/types";
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
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={product.thumbnail}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button
            title="Remove Item"
            className="text-red-500 hover:text-red-600 ml-4"
            onClick={() => removeFromCart(product)}
            data-testid={"cart-remove"}
          >
            <FaTrashAlt size={18} />
          </button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{product.title}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">
              <IconButton
                onClick={handleOnDecrease}
                icon={<FaMinus />}
                name="decrease-btn"
                className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                data-testid={"cart-decrease"}
              />
            </p>
            <p
              className="text-gray-500 pl-4 pt-2 font-semibold"
              data-testid={"cart-item-quantity"}
            >
              {product.quantity}
            </p>
            <p className="pl-4 text-gray-500">
              <IconButton
                onClick={handleOnIncrease}
                icon={<FaPlus />}
                name="increase-btn"
                className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                data-testid={"cart-increase"}
              />
            </p>
          </div>
          ${product.price}
        </div>
      </div>
    </li>
  );
}
