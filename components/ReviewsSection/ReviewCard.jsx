import Image from "next/image";
import styles from "./ReviewsSection.module.scss";

const ReviewCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <Image src="/icons/profile.svg" width={56} height={56} alt="profile" />
        <div className={styles.nameContainer}>
          <span className={styles.name}>Mikl Smit</span>
          <span className={styles.date}>8 month ago</span>
        </div>
      </div>
      <span className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. In risus amet in commodo
        consequat congue curabitur egestas. Tellus urna faucibus felis
        suspendisse tellus. Sit consectetur lacus massa velit viverra.
        Pellentesque elementum aliquam cras scelerisque. Nisi eleifend varius
        massa vitae.
      </span>
      <span className={styles.cardLine}></span>
      <div className={styles.ratingContainer}>
        <Image src="/icons/star.svg" width={28} height={28} alt="star" />
        <Image src="/icons/star.svg" width={28} height={28} alt="star" />
        <Image src="/icons/star.svg" width={28} height={28} alt="star" />
        <Image src="/icons/star.svg" width={28} height={28} alt="star" />
        <Image src="/icons/star.svg" width={28} height={28} alt="star" />
      </div>
    </div>
  );
};

export default ReviewCard;
