import Image from "next/image";
import styles from "@/app/page.module.css";
import { Dictionary } from "@/type";
import chevron from "/public/images/chevron-right.svg";


const Menu = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.menuContainer}>
          {dictionary.menuList.map((item, index) => {
            return (
              <div key={index} className={styles.menuItem}>
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
                <Image
                  src={chevron}
                  alt={dictionary.chevron.alt}
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
        </div>
  )
}

export default Menu
