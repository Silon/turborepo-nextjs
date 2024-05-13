import "styles/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import { ArAppContextProvider } from "contexts/ArAppContext";

type Props = {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
};

export const metadata: Metadata = {
  title: "Ar Root Layout",
  description: "Ar Root Layout Description",
};

export async function ArRootLayout({ children, params }: Props) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ArAppContextProvider>{children}</ArAppContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
