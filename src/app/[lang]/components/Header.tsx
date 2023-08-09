import Image from "next/image";
import styles from "@/app/page.module.css";
import logo from "/public/images/logo.png";
import logoDarkMode from "/public/images/logo-dark-mode.png";
import globeIcon from "/public/images/globe.svg";
import globeIconDarkMode from "/public/images/globe-dark-mode.svg";
import { Dictionary } from "@/type";

const Header = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.header}>
      <picture className={styles.imageWrapper}>
        <source
          srcSet={logoDarkMode.src}
          media="(prefers-color-scheme: dark)"
        />
        <Image src={logo} alt={dictionary.logo.alt} className={styles.logo} />
      </picture>
      <div className={styles.langButton}>
        <picture className={styles.imageWrapper}>
          <source
            srcSet={globeIconDarkMode.src}
            media="(prefers-color-scheme: dark)"
          />
          <Image
            src={globeIcon}
            alt={dictionary.globeIcon.alt}
            width={20}
            height={20}
          />
        </picture>
        Language
      </div>
    </div>
  );
};

export default Header;
