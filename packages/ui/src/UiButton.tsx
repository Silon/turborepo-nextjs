import { type ButtonHTMLAttributes, forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

type UiButtonVariants = VariantProps<typeof uiButton>

export type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  UiButtonVariants & {
    readonly href?: string
    readonly type?: 'button' | 'reset' | 'submit'
  }

const uiButton = tv({
  base: 'flex',
  variants: {
    theme: {
      base: 'rounded-lg border border-gray-300 px-4 py-1 transition-all active:scale-95',
      primary: 'bg-ar-primary',
    },
  },
})

export const UiButton = forwardRef<HTMLButtonElement, UiButtonProps>(
  ({ children, className, theme = 'base', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={uiButton({ theme, className })}
        {...props}
      >
        {children}
      </button>
    )
  },
)
