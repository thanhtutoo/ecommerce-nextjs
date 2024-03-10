import { FiShoppingCart } from "react-icons/fi";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "@/hooks/useFromStore";
import Link from "next/link";
import Button from "./Button";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <header className="text-black py-4 flex items-center justify-between h-16 sticky top-0 z-10 border-b bg-white items-center">
      <nav className="container mx-auto md:w-10/12 px-4 flex justify-between  items-center">
        <Link href="/">
          <span className="text-lg font-semibold">My E-commerce</span>
        </Link>
        <div className="relative">
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
}
