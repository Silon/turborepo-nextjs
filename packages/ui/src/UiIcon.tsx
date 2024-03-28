import { forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

type BasicIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

type IconProps =
  | (BasicIconProps & {
      width: string | number;
      height: string | number;
    })
  | (BasicIconProps & {
      size: string | number;
    });

type UiIconVariants = VariantProps<typeof uiIcon>;

export type UiIconProps = IconProps & UiIconVariants;

const uiIcon = tv({
  base: "flex",
  variants: {
    theme: {
      base: "",
      primary: "text-primary",
    },
  },
});

export const UiIcon = forwardRef<SVGSVGElement, UiIconProps>((props, ref) => {
  const style: Record<string, string | number> = {
    width: "100%",
    height: "100%",
  };

  if ("size" in props) {
    style.maxWidth = props.size;
    style.maxHeight = props.size;
  } else {
    style.maxWidth = props.width || "none";
    style.maxHeight = props.height || "none";
  }

  const IconComponent = props.icon;

  return (
    <IconComponent ref={ref} className={uiIcon({ theme: props.theme, className: props.className })} style={style} />
  );
});
