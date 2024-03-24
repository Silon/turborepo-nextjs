import React from "react";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Ar Home Page",
  description: "Ar Home Page Description",
};

export function ArHomePage(props: Props) {
  console.log("ArHomePage props:", props);
  return <div className="container">ArHomePage</div>;
}
