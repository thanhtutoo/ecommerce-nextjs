import Header from "./Header";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

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
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default AppContainer;
