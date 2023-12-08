import Image from "next/image";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphContainer}>
        <h3 className={styles.title}>Tax Planning</h3>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Leo egestas tempus lacus
          maecenas. Tempus mauris accumsan fames diam et fames pharetra. Eget
          ipsum dictum diam ultrices malesuada sapien bibendum. Massa sagittis
          aliquet vulputate egestas velit sapien proin. Tortor id porta leo sit
          et dignissim vulputate adipiscing. Velit mauris faucibus aliquet eget.
          Commodo posuere massa vulputate cursus et proin nisi. Eget quam in
          consequat ut feugiat feugiat tincidunt id. Sollicitudin id interdum
          est adipiscing diam egestas morbi pretium tristique. Dui turpis
          accumsan ullamcorper rhoncus morbi. Viverra nisi vulputate commodo
          condimentum.
        </span>
        <Image
          alt="details"
          src="/details1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.paragraphContainer}>
        <h3 className={styles.title}>The Story</h3>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet{" "}
          <span style={{ color: "#87A01A" }}>consectetur</span>. Nunc ornare
          enim dolor vitae velit faucibus enim amet sem. In nisi lacus nec ac.
          Nibh volutpat congue tristique sit viverra nulla. Non nunc elit amet
          vitae consectetur feugiat mi ut. Vivamus feugiat facilisis etiam
          suspendisse in molestie ullamcorper quis nec. Non tellus sed fermentum
          eu quam odio. Vel ante massa consequat fringilla. Non fermentum
          interdum neque suspendisse pellentesque orci viverra. Sed risus at
          consequat et tellus. Tristique semper erat purus id sed enim aliquam.
          Vitae orci ullamcorper pulvinar sed.
        </span>
        <div className={styles.quoteContainer}>
          <Image src="/icons/quote.svg" alt="quote" width={60} height={60} />
          <span className={styles.quoteText}>
            Lorem ipsum dolor sit amet consectetur. Congue quis ac eget posuere
            elementum eu et suspendisse vulputate. Vitae iaculis fames venenatis
            faucibus purus eu enim turpis vitae. Eu lacus vel placerat nibh nam
            massa tempus.
          </span>
        </div>
        <span className={styles.text}>
          Nunc ornare enim dolor vitae velit faucibus enim amet sem. In nisi
          lacus nec ac. Nibh volutpat congue tristique sit viverra nulla. Non
          nunc elit amet vitae consectetur feugiat mi ut. Vivamus feugiat
          facilisis etiam suspendisse in molestie ullamcorper quis nec. Non
          tellus sed fermentum eu quam odio. Vel ante massa consequat fringilla.
          Non fermentum interdum neque suspendisse pellentesque orci viverra.
          Sed risus at consequat et tellus. Tristique semper erat purus id sed
          enim aliquam. Vitae orci ullamcorper pulvinar sed.
        </span>
      </div>
      <div className={styles.paragraphContainer}>
        <span className={styles.title}>The Story</span>
        <div className={styles.pointContainer}>
          <Image src="/icons/point.svg" alt="point" width={8} height={8} />
          <span className={styles.pointText}>
            Nunc ornare enim dolor vitae velit faucibus enim amet sem. In nisi
            lacus nec ac. Nibh volutpat congue tristique sit viverra nulla
          </span>
        </div>
        <div className={styles.pointContainer}>
          <Image src="/icons/point.svg" alt="point" width={8} height={8} />
          <span className={styles.pointText}>
            Nunc ornare enim dolor vitae velit faucibus enim amet sem
          </span>
        </div>
        <Image
          alt="details"
          src="/details2.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default MainContent;
