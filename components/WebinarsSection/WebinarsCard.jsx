import Image from "next/image";
import styles from "./WebinarsSection.module.scss";
import Link from "next/link";

const WebinarsCard = ({title, id}) => {
  return (
    <div className={styles.cardContainer}>
      <Image src="/webinar.png" width={424} height={228} alt="webinar" />
      <span className={styles.cardTitle}>{title}</span>
      <span className={styles.cardText}>
        Lorem ipsum dolor sit amet consectetur. Enim est dictum faucibus
        pretium. Pretium et massa ornare sapien. Elementum cursus vel in in
        egestas. Dolor velit eu pharetra pharetra. Aliquet purus vitae in
        ultrices consectetur dui sed ut tortor.
      </span>
      <div className={styles.cardBtn}><Link href={`/tax_planning/${id}`}>Read more</Link></div>
    </div>
  );
};

export default WebinarsCard;
