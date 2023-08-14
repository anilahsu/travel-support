import Image from "next/image";
import styles from "@/app/page.module.css";
import { Dictionary } from "@/type";
import chevron from "/public/images/chevron.svg";
import chevronDarkMode from "/public/images/chevron-dark-mode.svg";
import Link from "next/link";

const Menu = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.menuContainer}>
      {dictionary && dictionary.menuList.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={styles.menuItem}>
            <div className={styles.menuContent}>
              <span className={styles.iconContainer}>
                <Image
                  src={item.icon.src}
                  alt={item.icon.alt}
                  width={24}
                  height={24}
                />
              </span>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
            <picture className={styles.imageThemeWrapper}>
              <source
                srcSet={chevronDarkMode.src}
                media="(prefers-color-scheme: dark)"
              />
              <Image
                src={chevron}
                alt={dictionary.chevron.alt}
                width={24}
                height={24}
              />
            </picture>
          </Link>
        );
      })}
      {dictionary && dictionary.buttons.map((button, index) => {
        return (
          <Link key={index} href={button.link} className={styles.button}>
            {button.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
