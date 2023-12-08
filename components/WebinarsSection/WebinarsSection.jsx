"use client";
import Image from "next/image";
import WebinarsCard from "./WebinarsCard";
import styles from "./WebinarsSection.module.scss";
import { blogs } from "@/blogs/blogs";

const WebinarsSection = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 425;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 425;
  };
  return (
    <div className={styles.sectionContainer}>
      <span className={styles.line}></span>
      <h2 className={styles.title}>My Webinars Coming Soon...</h2>
      <div className={styles.reviewsContainer} id="slider2">
        {blogs.map((blog) => {
          return <WebinarsCard title={blog.title} key={blog.id} id={blog.id}/>
        })}
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

export default WebinarsSection;
