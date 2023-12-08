import Image from "next/image";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.mainSection}>
        <div className={styles.firstColumn}>
          <h3 className={styles.subtitle}>Information</h3>
          <span className={styles.info}>
            Our office hours are Monday to Friday, 9:00 AM to 5:00 PM, and we
            strive to respond to your inquiries within 24 hours. Your
            satisfaction is our priority, and we look forward to assisting you.
            Thank you for choosing.
          </span>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
                <div className={styles.icon}>
                    <Image
                        src="/icons/call.svg"
                        alt="call"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.iconDescription}>
                    <span>Call us now</span>
                    <span>(256) 252-4385</span>
                </div>
            </div>
            <div className={styles.iconItem}>
                <div className={styles.icon}>
                    <Image
                        src="/icons/mail.svg"
                        alt="mail"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.iconDescription}>
                    <span>Chat with us</span>
                    <span>example@gmail.com</span>
                </div>
            </div>
            <div className={styles.iconItem}>
                <div className={styles.icon}>
                    <Image
                        src="/icons/location.svg"
                        alt="location"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.iconDescription}>
                    <span>Location</span>
                    <span>Ashland, AL 36251, United States of America</span>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
        </div>
        <div className={styles.thirdColumn}>
            <span className={styles.formTitle}>Talk To Chris!</span>
            <form className={styles.form}>
                <div className={styles.nameInputs}>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}>First Name</label>
                        <input required className={styles.inputField} name="firstName"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}>Phone Number</label>
                        <input required className={styles.inputField} name="phone"/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Email</label>
                    <input required className={styles.inputField} name="email"/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Message</label>
                    <input required className={styles.inputField} name="message"/>
                </div>
                <sumbit className={styles.submitBtn}>Send</sumbit>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
