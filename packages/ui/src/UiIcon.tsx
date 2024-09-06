import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

type BasicIconProps = {
  className?: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

type IconProps =
  | (BasicIconProps & {
    height: number | string
    width: number | string
  })
  | (BasicIconProps & {
    size: number | string
  })

type UiIconVariants = VariantProps<typeof uiIcon>

export type UiIconProps = IconProps & UiIconVariants

const uiIcon = tv({
  base: 'flex',
  variants: {
    theme: {
      base: '',
      primary: 'text-ar-primary',
    },
  },
})

export const UiIcon = forwardRef<SVGSVGElement, UiIconProps>((props, ref) => {
  const style: Record<string, number | string> = {
    width: '100%',
    height: '100%',
  }

  if ('size' in props) {
    style.maxWidth = props.size
    style.maxHeight = props.size
  }
  else {
    style.maxWidth = props.width || 'none'
    style.maxHeight = props.height || 'none'
  }

  const IconComponent = props.icon

  return (
    <IconComponent
      ref={ref}
      className={uiIcon({ theme: props.theme, className: props.className })}
      style={style}
    />
  )
})
