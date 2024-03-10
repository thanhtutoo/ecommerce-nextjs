import Image from "next/image";
import { Product } from "@/components/products/types";
import Link from "next/link";
import StarRating from "../ui/StarRating";
import Button from "./Button";
import { FiShoppingCart } from "react-icons/fi";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";

interface Props {
  onCartIconClick: () => void;
}

export default function ShoppingCart({ onCartIconClick }: Props) {
  const totalItem = useFromStore(useCartStore, (state) => state.totalItems);

  return (
    <Button
      className="flex items-center rounded-full bg-black px-4 py-2"
      data-testid={"go-to-cart"}
      onClick={onCartIconClick}
    >
      <FiShoppingCart size={20} />
      <span
        className="ml-2 text-sm font-medium text-white"
        data-cy-cart-info="total"
      >
        {totalItem}
      </span>
    </Button>
  );
}
