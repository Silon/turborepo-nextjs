import type { Metadata } from 'next'

import { ArGlobalStoreProvider } from 'lib/store/ArGlobalStore'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'
import 'styles/globals.css'

type Props = {
  readonly children: React.ReactNode
  readonly params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Ar Root Layout',
  description: 'Ar Root Layout Description',
}

async function Providers({ children }: { readonly children: React.ReactNode }) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ArGlobalStoreProvider>{children}</ArGlobalStoreProvider>
    </NextIntlClientProvider>
  )
}

export async function ArRootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
