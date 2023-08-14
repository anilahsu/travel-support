import styles from "@/app/page.module.css";
import { Dictionary } from "@/type";
import Logo from "./Logo";
import Link from "next/link";

const Footer = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoWrapper}>
        <Logo dictionary={dictionary} />
      </div>
      {dictionary &&
        dictionary.footerButtons.map((button, index) => {
          return (
            <Link
              key={index}
              href={button.link}
              className={styles.footerButton}
            >
              {button.text}
            </Link>
          );
        })}
    </div>
  );
};

export default Footer;
