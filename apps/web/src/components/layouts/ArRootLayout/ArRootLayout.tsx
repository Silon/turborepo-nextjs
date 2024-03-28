import "styles/globals.css";

import React from "react";
import type { Metadata } from "next";
import { ArAppContextProvider } from "contexts/ArAppContext";

type Props = {
  children: React.ReactNode;
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
