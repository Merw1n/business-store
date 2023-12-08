import styles from "./HeroSection.module.scss"

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.title}>
                    Blog
                </h2>
            </div>
        </div>
    )
}

export default HeroSection;