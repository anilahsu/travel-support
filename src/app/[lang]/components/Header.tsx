import Image from "next/image";
import styles from "@/app/page.module.css";
import globeIcon from "/public/images/globe.svg";
import globeIconDarkMode from "/public/images/globe-dark-mode.svg";
import { Dictionary } from "@/type";
import Logo from "./Logo";

const Header = ({
  dictionary,
  onClick,
}: {
  dictionary: Dictionary;
  onClick: () => void;
}) => {
  return (
    <div className={styles.header}>
      <Logo dictionary={dictionary} />
      <div className={styles.langButton} onClick={onClick}>
        <picture className={styles.imageThemeWrapper}>
          <source
            srcSet={globeIconDarkMode.src}
            media="(prefers-color-scheme: dark)"
          />
          <Image
            src={globeIcon}
            alt={dictionary ? dictionary.globeIcon.alt : ""}
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
