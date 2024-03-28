import { type InputHTMLAttributes, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

type UiFormTextInputVariants = VariantProps<typeof uiFormTextInput>;

export type UiButtonProps = InputHTMLAttributes<HTMLInputElement> & UiFormTextInputVariants & {};

const uiFormTextInput = tv({
  base: "flex",
  variants: {
    theme: {
      base: "px-1 py-1 border border-gray-300 rounded-lg",
      primary: "bg-ar-primary",
    },
  },
});

export const UiFormTextInput = forwardRef<HTMLInputElement, UiButtonProps>(
  ({ children, className, type = "text", theme = "base", ...props }, ref) => {
    return (
      <input ref={ref} type={type} className={uiFormTextInput({ theme, className })} {...props}>
        {children}
      </input>
    );
  }
);
