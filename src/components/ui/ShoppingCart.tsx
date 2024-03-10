"use client";
import Button from "./Button";
import { FiShoppingCart } from "react-icons/fi";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const totalItem = useFromStore(useCartStore, (state) => state.totalItems);
  const router = useRouter();
  const handleCartIconClick = () => {
    router.push("/cart");
  };
  return (
    <Button
      className="flex items-center rounded-full bg-black px-4 py-2"
      data-testid={"go-to-cart"}
      onClick={handleCartIconClick}
    >
      <FiShoppingCart size={20} />
      <span
        className="ml-2 text-sm font-medium text-white"
        data-cy-cart-info="total"
        data-testid={"cart-info-total"}
      >
        {totalItem}
      </span>
    </Button>
  );
}
