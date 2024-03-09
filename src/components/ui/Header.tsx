import { FiShoppingCart } from "react-icons/fi";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "@/hooks/useFromStore";
import Link from "next/link";
import Button from "./Button";
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
    <header className="text-black py-4 flex items-center justify-between h-16 sticky top-0 z-10 border-b bg-white items-center">
      <nav className="container mx-auto md:w-10/12 px-4 flex justify-between  items-center">
        <Link href="/">
          <span className="text-lg font-semibold">My E-commerce</span>
        </Link>
        <div className="relative">
          <Button
            className="flex items-center rounded-full bg-black px-4 py-2"
            data-testid={"go-to-cart"}
            onClick={onCartIconClick}
          >
            <FiShoppingCart size={20} />
            <span className="ml-2 text-sm font-medium text-white">{total}</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
