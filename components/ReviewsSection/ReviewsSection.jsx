"use client";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsSection.module.scss";

const ReviewsSection = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 425;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 425;
  };
  return (
    <div className={styles.sectionContainer}>
      <span className={styles.line}></span>
      <h2 className={styles.title}>What Our Customers Are Saying</h2>
      <div className={styles.reviewsContainer} id="slider">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className={styles.arrows}>
        <button
          title="scroll left"
          onClick={slideLeft}
          className={styles.arrow}
        >
          <Image
            src="/icons/arrow-left.svg"
            width={32}
            height={32}
            alt="left"
          />
        </button>
        <button
          title="scroll right"
          onClick={slideRight}
          className={styles.arrow}
        >
          <Image
            src="/icons/arrow-right.svg"
            width={32}
            height={32}
            alt="right"
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
