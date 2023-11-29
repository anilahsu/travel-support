"use client";

import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, i18n } from "../../../i18n-config";

const langSelector = {
  ja: "日本語",
  en: "English",
  zn: "简体中文",
  tw: "繁體中文",
  ko: "한국어",
};

export default function LocaleSelect({ onClick }: { onClick: () => void }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <div className={styles.dialog}>
      <ul className={styles.langItemContainer}>
        {i18n.locales.map((locale) => {
          return (
            <Link key={locale} href={redirectedPathName(locale)}>
              <li className={styles.langItem} onClick={onClick}>
                {langSelector[locale]}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
