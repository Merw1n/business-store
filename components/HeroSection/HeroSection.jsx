import styles from "./HeroSection.module.scss"

const HeroSection = () => {
    const listItems = ["Tax Planning Strategies", "Retirement Strategies", "Tax Prep", "Financial Coaching"]
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h2 className={styles.title}>
                    Empower Yourself
                </h2>
                <h3 className={styles.subtitle}>
                    Where your dreams become Reality
                </h3>
                <ul className={styles.list}>
                    {
                        listItems.map((item, index) => {
                            return <li className={styles.listItem} key={index}>{item}</li>
                        })
                    }
                </ul>
                <div className={styles.learn}>
                    Learn more
                </div>
            </div>
        </div>
    )
}

export default HeroSection;