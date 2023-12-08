"use client";
import { useState } from "react";
import styles from "./ServicesSection.module.scss";

const ServicesSection = () => {
  const picks = [
    "Tax Planning Strategies",
    "Tax Prep",
    "Retirement Strategies",
    "Financial Coaching",
  ];
  const [activePick, setActivePick] = useState(picks[0]);
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <h3 className={styles.subtitle}>Choose Your Service</h3>
          <span className={styles.info}>
            Lorem ipsum dolor sit amet consectetur. Id lorem facilisi ultrices
            odio tincidunt morbi.
          </span>
          <ul>
            {picks.map((pick, index) => {
              return (
                <li
                  className={
                    pick == activePick
                      ? `${styles.pick} + ${styles.active}`
                      : styles.pick
                  }
                  key={index}
                  onClick={() => setActivePick(pick)}
                >
                  {pick}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.rightColumn}>
            <span className={styles.bannerTitle}>{activePick}</span>
            <span className={styles.bannerText}>Our office hours are Monday to Friday, 9:00 AM to 5:00 PM, and we strive to respond to your inquiries within 24 hours. </span>
            <div className={styles.bannerBtn}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
