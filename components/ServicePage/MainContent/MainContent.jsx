import Image from "next/image";
import styles from "./MainContent.module.scss";
import ContactSection from "@/components/ContactSection/ContactSection";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.textColumn}>
          <span className={styles.title}>Tax Planning Strategies</span>
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
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/service1.png" alt="service1" width={535} height={468} />
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.imageColumn}>
          <Image src="/service2.png" alt="service2" width={535} height={468} />
        </div>
        <div className={styles.textColumn}>
          <span className={styles.title}>Tax Prep</span>
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
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.firstSection}>
        <div className={styles.textColumn}>
          <span className={styles.title}>Retirement Strategies</span>
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
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/service3.png" alt="service3" width={535} height={468} />
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.imageColumn}>
          <Image src="/service4.png" alt="service4" width={535} height={468} />
        </div>
        <div className={styles.textColumn}>
          <span className={styles.title}>Financial Coaching</span>
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
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
            <div className={styles.checkItem}>
              <Image
                src="/icons/check.svg"
                width={32}
                height={32}
                alt="check"
              />
              <span className={styles.checkText}>Lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default MainContent;
