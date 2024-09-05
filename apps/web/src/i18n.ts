import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import type { RecursiveKeyOf } from 'types'
import type translation from '../messages/en.json'

// Can be imported from a shared config
const locales = ['en']

type DefaultLocale = typeof translation
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any))
    notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
}) as any
