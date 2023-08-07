import Image from "next/image";
import styles from "../page.module.css";
import { getDictionary } from "@/get-dictionary";
import { Locale } from '@/i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <p>Current locale: {lang}</p>
      {dictionary.logo.alt}
    </main>
  );
}
