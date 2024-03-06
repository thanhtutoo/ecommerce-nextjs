import { MouseEventHandler, ButtonHTMLAttributes } from "react";
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  name,
  ...props
}) => {
  return (
    <button onClick={onClick} role="button" className={className} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
