import { EB_Garamond, Geist, Geist_Mono } from "next/font/google";

import { useSettingsStore } from "@/store/settings";
import { useEffect } from "react";
import { LayoutHeader } from "./LayoutHeader";
import { IPageKey } from "@/config/pages";
import { LayoutFooter } from "./LayoutFooter";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  page: IPageKey;
  header?: React.ReactNode;
}

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const MainLayout: React.FC<IProps> = ({
  children,
  page,
  header,
  ...props
}) => {
  const { mode, font, fontScale } = useSettingsStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-body", font);
  }, [font]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", `${fontScale}`);
  }, [fontScale]);

  const fontClasses = [
    garamond.variable,
    geistSans.variable,
    geistMono.variable,
  ];

  return (
    <div
      className={`${fontClasses.join(" ")} font-body main-layout`}
      {...props}
    >
      <LayoutHeader page={page}>{header}</LayoutHeader>
      <main className="layout-main mt-2">{children}</main>
      <LayoutFooter />
    </div>
  );
};
