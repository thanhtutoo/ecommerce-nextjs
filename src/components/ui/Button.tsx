import { forwardRef } from "react";
import { ClassNames } from "@emotion/react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <ClassNames>
        {({ cx }) => (
          <button
            type={type}
            disabled={disabled}
            className={cx(
              "w-auto",
              "rounded-full",
              "bg-black",
              "border",
              "border-transparent",
              "px-5",
              "py-3",
              "disabled:cursor-not-allowed",
              "disabled:opacity-50",
              "text-white",
              "font-semibold",
              "hover:opacity-75",
              "transition"
            )}
            ref={ref}
            {...props}
          >
            {children}
          </button>
        )}
      </ClassNames>
    );
  }
);

Button.displayName = "Button";

export default Button;
