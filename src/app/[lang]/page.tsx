"use client";
import styles from "@/app/page.module.css";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LocaleSelect from "./components/LocaleSelect";
import { useEffect, useState } from "react";
import { Dictionary } from "@/type";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [data, setData] = useState<Dictionary | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const handleClick = () => {
    setShowDialog(!showDialog);
  };
  const handleDialog = () => {
    setShowDialog(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const dictionary = await getDictionary(lang);
      setData(dictionary);
    };
    fetchData().catch(console.error);
  }, [lang]);
  return (
    <>
      {showDialog && (
        <div className={styles.dialogContainer} onClick={handleDialog}>
          <LocaleSelect onClick={handleDialog} />
        </div>
      )}
      <main className={styles.main}>
        <div className={styles.container}>
          <Header dictionary={data} onClick={handleClick} />
          <Banner dictionary={data} />
          <div className={styles.innerContainer}>
            <Menu dictionary={data} />
            <div className={styles.borderLine} />
            <Footer dictionary={data} />
            <div className={styles.copyright}>
              Copyright © Pocket Change Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
