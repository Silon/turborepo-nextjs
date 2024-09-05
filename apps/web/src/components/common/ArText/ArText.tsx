import { useTranslations } from 'next-intl'
import React from 'react'
import type { ArTextProps } from './ArText.types'

export function ArText({ children, tx, element = 'p', ...props }: ArTextProps) {
  const t = useTranslations()

  if (element === 'none') {
    return <>{tx ? t(tx as any) : children}</>
  }

  const Element = element as React.ElementType

  return <Element {...props}>{tx ? t(tx as any) : children}</Element>
}
