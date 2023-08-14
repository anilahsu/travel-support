"use client";

import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";

const langSelector = {
  ja: "Japanese/日本語",
  en: "English/英語",
};

export default function LocaleSelect({ onClick }: { onClick: () => void }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <div className={styles.dialog}>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className={styles.langItem} onClick={onClick}>
              <Link href={redirectedPathName(locale)}>
                {langSelector[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
