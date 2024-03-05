import { forwardRef } from "react";
import { ClassNames } from "@emotion/react";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className={clsx(
          `
          w-auto 
          rounded-full 
          bg-black
          border
          border-transparent
          px-5 
          py-3 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-white
          font-semibold
          hover:opacity-75
          transition
        `,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
