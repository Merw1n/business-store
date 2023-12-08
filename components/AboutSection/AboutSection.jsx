import Image from "next/image";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>About Company</h2>
      <div className={styles.mainContent}>
        <Image src="/about.png" width={521} height={525} alt="About image" />
        <div className={styles.textSection}>
          <span className={styles.meetTeam}>Meet our Team</span>
          <span className={styles.mainInfo}>
            Lorem ipsum dolor sit amet consectetur. Nec id orci justo sit quam
            congue diam sodales accumsan. Tincidunt condimentum viverra sed dui
            sapien proin diam. Ultrices sed auctor in sit. Massa id volutpat
            lobortis viverra id purus nunc et tellus. Scelerisque eget enim
            dignissim nulla diam. Tristique cursus at nisl morbi tellus massa ut
            sed.
          </span>
          <span className={styles.line}></span>
          <div className={styles.numberSection}>
            <div className={styles.singleNumber}>
              <span className={styles.number}>16+</span>
              <span className={styles.numberDescription}>
                Years experience...
              </span>
            </div>
            <div className={styles.singleNumber}>
              <span className={styles.number}>500+</span>
              <span className={styles.numberDescription}>
                Projects completed...
              </span>
            </div>
          </div>
          <div className={styles.more}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
