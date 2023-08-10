import Image from "next/image";
import styles from "@/app/page.module.css";
import logo from "/public/images/logo.png";
import logoDarkMode from "/public/images/logo-dark-mode.png";
import { Dictionary } from "@/type";

const Logo = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <picture className={styles.imageThemeWrapper}>
      <source srcSet={logoDarkMode.src} media="(prefers-color-scheme: dark)" />
      <Image src={logo} alt={dictionary.logo.alt} className={styles.logo} />
    </picture>
  );
};

export default Logo;
