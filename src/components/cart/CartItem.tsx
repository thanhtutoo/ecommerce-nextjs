import { FaTrashAlt } from "react-icons/fa";

import { Product } from "../../types";
import Image from "next/image";
import { useCartStore } from "../../stores/useCartStore";
import QuantityCounter from "../ui/QuantityCounter";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [quantity, setQuantity] = useState(product.quantity);
  return (
    <li className="gap-4  mb-2 shadow-md p-4">
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
              ${product.description}
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col sm:mt-5 sm:mr-5">
            <QuantityCounter
              quantity={Number(quantity)}
              setQuantity={setQuantity}
            />
          </div>
          <div className="flex flex-col sm:mt-5 ">
            <span className="text-gray-600 font-bold">${product.price}</span>
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
