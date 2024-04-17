import "styles/globals.css";

import type { Metadata } from "next";
import React from "react";
import { ArAppContextProvider } from "contexts/ArAppContext";

type Props = {
  readonly children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Ar Root Layout",
  description: "Ar Root Layout Description",
};

export function ArRootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ArAppContextProvider>{children}</ArAppContextProvider>
      </body>
    </html>
  );
}
