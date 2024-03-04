import { FiShoppingCart } from "react-icons/fi";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "@/hooks/useFromStore";
import Link from "next/link";

interface Props {
  onCartIconClick: () => void;
}

export default function Header({ onCartIconClick }: Props) {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + Number(product.quantity as number),
      0
    );
  }
  return (
    <header className="bg-gray-900 text-white py-4 flex items-center justify-between h-14 sticky top-0 z-10">
      <nav className="container mx-auto md:w-10/12 px-4 flex justify-between">
        <Link href="/">
          <span className="text-lg font-semibold">My E-commerce</span>
        </Link>
        <div className="relative">
          <button
            type="button"
            title="Mini Cart"
            className="text-white text-xl flex items-center"
            onClick={onCartIconClick}
          >
            <FiShoppingCart />
            <div className="text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1">
              {total}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
