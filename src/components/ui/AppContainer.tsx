import { useState } from "react";
import Cart from "../minicart/Cart";
import Drawer from "./Drawer";
import Header from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<ContainerProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <Header onCartIconClick={handleCartIconClick} />
      <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
        <Cart />
      </Drawer>
      {children}
    </div>
  );
};

export default AppContainer;
