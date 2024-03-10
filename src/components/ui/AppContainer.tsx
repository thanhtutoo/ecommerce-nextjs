import Header from "./Header";
import { Toaster } from "react-hot-toast";

interface ContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default AppContainer;
