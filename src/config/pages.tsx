import { IPage } from "@/types";
import config from ".";

export const pages = {
  home: {
    path: "/",
    title: config.APP_FULL_NAME,
    description: config.APP_DESCRIPTION,
  },
  notFound: {
    path: "/404",
    title: "404 - Not Found",
    description: "The page you are looking for does not exist.",
  },
} as const satisfies Record<string, IPage>;

export type IPageKey = keyof typeof pages;
