import type { useTranslations } from 'next-intl'
import type { TxKeyPath } from 'i18n'

export type ArTextProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
  element?:
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'none'
    | 'p'
    | 'span'
  translationOptions?: typeof useTranslations
  tx?: TxKeyPath
}
