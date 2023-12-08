import Image from "next/image";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.textColumn}>
          <span className={styles.title}>Hi, I'm Chris Lucas</span>
          <span className={styles.text}>
            Ashland Tax Master LLC has revolutionized the tax consulting space –
            now you can get personalized financial advice without ever leaving
            your house! Whether it's for personal or business use, our advanced
            virtual services provide tailored guidance that help empower and
            protect your finances. Invest in yourself with a free consultation
            today to learn more about how we make managing taxes easier than
            ever before.
          </span>
          <span className={styles.subtitle}>Empowering Prosperity</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Nec id orci justo sit quam
            congue diam sodales accumsan. Tincidunt condimentum viverra sed dui
            sapien proin diam. Ultrices sed auctor in sit. Massa id volutpat
            lobortis viverra id purus nunc et tellus. Scelerisque eget enim
            dignissim nulla diam. Tristique cursus at nisl morbi tellus massa ut
            sed.
          </span>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/face.png" alt="face" width={535} height={468} />
        </div>
      </div>
      <div className={styles.firstSection}>
        <div className={styles.imageColumn}>
          <Image src="/goal.png" alt="goal" width={535} height={468} />
        </div>
        <div className={styles.textColumn}>
          <span className={styles.title}>My Goal</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Leo egestas tempus lacus
            maecenas. Tempus mauris accumsan fames diam et fames pharetra. Eget
            ipsum dictum diam ultrices malesuada sapien bibendum. Massa sagittis
            aliquet vulputate egestas velit sapien proin. Tortor id porta leo
            sit et dignissim vulputate adipiscing. Velit mauris faucibus aliquet
            eget. Commodo posuere massa vulputate cursus et proin nisi. Eget
            quam in consequat ut feugiat feugiat tincidunt id. Sollicitudin id
            interdum est adipiscing diam egestas morbi pretium tristique. Dui
            turpis accumsan ullamcorper rhoncus morbi. Viverra nisi vulputate
            commodo condimentum.
          </span>
          <div className={styles.checkContainer}>
            <div className={styles.checkItem}>
                <Image src="/icons/check.svg" width={32} height={32} alt="check" />
                <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
                <Image src="/icons/check.svg" width={32} height={32} alt="check" />
                <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
                <Image src="/icons/check.svg" width={32} height={32} alt="check" />
                <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
                <Image src="/icons/check.svg" width={32} height={32} alt="check" />
                <span className={styles.checkText}>Lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
