import React from "react";
import type { Metadata } from "next";
import SvgIcon from "assets/svg/icon-info.svg";
import { UiButton } from "@repo/ui/UiButton";
import { UiFormTextInput } from "@repo/ui/UiFormTextInput";
import { UiIcon } from "@repo/ui/UiIcon";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Ar Home Page",
  description: "Ar Home Page Description",
};

export function ArHomePage(props: Props) {
  console.log("ArHomePage props:", props);
  return (
    <div className="container flex flex-col gap-6 p-10">
      <div>
        <h3 className="font-bold">UiIcon</h3>
        <UiIcon theme="primary" icon={SvgIcon} size={20} />
      </div>
      <div>
        <h3 className="font-bold">UiButton</h3>
        <UiButton>Click Me!</UiButton>
      </div>
      <div>
        <h3 className="font-bold">UiFormTextInput</h3>
        <UiFormTextInput />
      </div>
    </div>
  );
}
