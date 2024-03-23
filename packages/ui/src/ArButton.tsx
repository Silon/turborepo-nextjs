import { HTMLAttributes } from "react";
import { VariantProps, tv } from "tailwind-variants";

type ArButtonVariants = VariantProps<typeof arButton>;

export type ArButtonProps = ArButtonVariants & HTMLAttributes<HTMLDivElement>;

const arButton = tv({
  base: "flex",
  variants: {
    theme: {
      base: "px-1 py-1",
      primary: "bg-ar-primary",
    },
  },
});

export function ArButton({ className, theme = "base" }: ArButtonProps) {
  return (
    <div className={arButton({ theme, className })}>
      <h1>ArButton Component</h1>
    </div>
  );
}
