import { type ButtonHTMLAttributes, forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

type UiButtonVariants = VariantProps<typeof uiButton>;

export type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  UiButtonVariants & {
    readonly href?: string;
    readonly type?: "button" | "reset" | "submit";
  };

const uiButton = tv({
  base: "flex",
  variants: {
    theme: {
      base: "px-4 py-1 border border-gray-300 rounded-lg active:scale-95 transition-all",
      primary: "bg-ar-primary",
    },
  },
});

export const UiButton = forwardRef<HTMLButtonElement, UiButtonProps>(
  ({ children, className, theme = "base", type = "button", ...props }, ref) => {
    return (
      // eslint-disable-next-line react/button-has-type
      <button ref={ref} type={type} className={uiButton({ theme, className })} {...props}>
        {children}
      </button>
    );
  }
);
