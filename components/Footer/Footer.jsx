import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.itemContainer}>
                <span className={styles.footerTitle}>Navigation</span>
                <div className={styles.footerColumns}>
                    <div className={styles.footerList}>
                        <span className={styles.footerItem}>
                            Home
                        </span>
                        <span className={styles.footerItem}>
                            About Me
                        </span>
                        <span className={styles.footerItem}>
                            Services
                        </span>
                        <span className={styles.footerItem}>
                            Let`s Talk
                        </span>
                    </div>
                    <div className={styles.footerList}>
                        <span className={styles.footerItem}>
                            Blog
                        </span>
                        <span className={styles.footerItem}>
                            Tax Tools
                        </span>
                        <span className={styles.footerItem}>
                            Resources
                        </span>
                        <span className={styles.footerItem}>
                            IRS Updates
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.itemContainer}>
                <span className={styles.footerTitle}>Documentation</span>
                <div className={styles.footerList}>
                    <span className={styles.footerItem}>
                        Refund Policy
                    </span>
                    <span className={styles.footerItem}>
                        Privacy Policy
                    </span>
                    <span className={styles.footerItem}>
                        Terms of Use
                    </span>
                    <span className={styles.footerItem}>
                        API
                    </span>
                </div>
            </div>
            <div className={styles.itemContainer}>
                <span className={styles.footerTitle}>Documentation</span>
                <div className={styles.footerList}>
                    <span className={styles.footerItem}>
                        <Image
                            src="/icons/call.svg"
                            alt="call"
                            width={24}
                            height={24}
                        />
                        (256) 252-4385
                    </span>
                    <span className={styles.footerItem}>
                        <Image
                            src="/icons/mail.svg"
                            alt="mail"
                            width={24}
                            height={24}
                        />
                        chris@ashlandtaxmaster.com
                    </span>
                    <span className={styles.footerItem}>
                        <Image
                            src="/icons/location.svg"
                            alt="location"
                            width={24}
                            height={24}
                        />
                        Ashland, AL 36251, United States of America
                    </span>
                    <div className={styles.footerBtn}>
                        Book Free Consultation
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer