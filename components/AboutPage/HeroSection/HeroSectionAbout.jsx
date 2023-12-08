import styles from "./HeroSectionAbout.module.scss"

const HeroSectionAbout = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.title}>
                    About Me
                </h2>
            </div>
        </div>
    )
}

export default HeroSectionAbout;