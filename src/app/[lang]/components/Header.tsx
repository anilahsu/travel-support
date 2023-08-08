import Image from "next/image";
import styles from "@/app/page.module.css";
import logo from "/public/images/logo.png";
import globeIcon from "/public/images/globe.svg";
import { Dictionary } from "@/type";

const Header = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.header}>
      <Image src={logo} alt={dictionary.logo.alt} className={styles.logo} />
      <div className={styles.langButton}>
        <Image
          src={globeIcon}
          alt={dictionary.globeIcon.alt}
          width={20}
          height={20}
        />
        Language
      </div>
    </div>
  );
};

export default Header;
