import Image from "next/image";
import styles from "@/app/page.module.css";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header dictionary={dictionary} />
        <Banner dictionary={dictionary} />
        <div className={styles.innerContainer}>
          <Menu dictionary={dictionary} />
          <div className={styles.borderLine} />
        </div>
      </div>
      <p>Current locale: {lang}</p>
    </main>
  );
}
