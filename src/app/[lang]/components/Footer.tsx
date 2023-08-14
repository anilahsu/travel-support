import styles from "@/app/page.module.css";
import { Dictionary } from "@/type";
import Logo from "./Logo";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Footer = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoWrapper}>
        <Logo dictionary={dictionary} />
      </div>

        {dictionary ? (
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
          })
        ) : (
          <div className={styles.footerButtonSkeleton}>
            <Skeleton height={48} count={2} />
          </div>
        )}

    </div>
  );
};

export default Footer;
