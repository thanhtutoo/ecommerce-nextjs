import { useState } from "react";
import Cart from "../minicart/Cart";
import Drawer from "./Drawer";
import Header from "./Header";
import { useRouter } from "next/router";

interface ContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<ContainerProps> = ({ children }) => {
  const router = useRouter();
  const handleCartIconClick = () => {
    router.push("/cart");
  };
  return (
    <div>
      <Header onCartIconClick={handleCartIconClick} />
      {children}
    </div>
  );
};

export default AppContainer;
