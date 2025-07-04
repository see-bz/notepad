import { IConfig } from "@/types";

export default {
  BRAND_REF_URL: "https://see.bz?ref=notepad",
  BRAND_NAME: "see",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "notepad",
  APP_FULL_NAME: `see/${process.env.NEXT_PUBLIC_APP_NAME || "notepad"}`,
  APP_DESCRIPTION:
    "A general purpose notepad app, free and privacy respecting.",
  APP_URL: "https://see.bz/notepad",
  APP_ICON: "/favicon.svg",
} as const satisfies IConfig;

export const FONTS = {
  "EB Garamond": "EB Garamond",
  "Geist": "Geist",
  Arial: "Arial",
  "Times New Roman": "Times New Roman",
  "Geist Mono": "Geist Mono",
  Monospace: "Monospace",
  "system-ui": "Default System UI",
};

export const LIGHT_MODE = {
  light: "Light",
  dark: "Dark",
};

export const TEXT_DIRECTION = {
  ltr: "Left to right",
  rtl: "Right to left",
};
