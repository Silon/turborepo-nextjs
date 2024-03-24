import { VariantProps, tv } from "tailwind-variants";

type BasicIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string }>;
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
      base: "px-1 py-1",
      primary: "text-blue-400 px-4",
    },
  },
});

export function UiIcon(props: UiIconProps) {
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

  return <IconComponent className={uiIcon({ theme: props.theme, className: props.className })} style={style} />;
}
