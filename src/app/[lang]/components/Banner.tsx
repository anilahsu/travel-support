import Image from "next/image";
import styles from "@/app/page.module.css";
import kiosk from "/public/images/kiosk.png";
import { Dictionary } from "@/type";

const Banner = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className={styles.banner}>
      <Image
        src={kiosk}
        alt={dictionary ? dictionary.kioskImage.alt : ""}
        className={styles.kioskImage}
      />
    </div>
  );
};

export default Banner;
