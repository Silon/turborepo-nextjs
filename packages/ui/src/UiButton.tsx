import { type HTMLProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

type UiButtonVariants = VariantProps<typeof uiButton>;

export type UiButtonProps = HTMLProps<HTMLDivElement> & UiButtonVariants;

const uiButton = tv({
  base: "flex",
  variants: {
    theme: {
      base: "px-1 py-1",
      primary: "bg-ar-primary",
    },
  },
});

export function UiButton({ className, theme = "base" }: UiButtonProps) {
  return (
    <div className={ uiButton({ theme, className })}>
      <h1>UiButton Component</h1>
    </div>
  );
}