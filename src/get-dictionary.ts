import type { Locale } from "./i18n-config";

const dictionaries = {
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  cn: () => import("./dictionaries/cn.json").then((module) => module.default),
  tw: () => import("./dictionaries/tw.json").then((module) => module.default),
  ko: () => import("./dictionaries/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
