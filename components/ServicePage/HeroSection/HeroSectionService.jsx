import styles from "./HeroSectionService.module.scss"

const HeroSectionService = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.title}>
                    Our Services
                </h2>
            </div>
        </div>
    )
}

export default HeroSectionService;