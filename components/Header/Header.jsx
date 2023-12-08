"use client";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setDropdownVisible(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <header className={styles.header}>
      {modalVisible && <Modal setModalVisible={setModalVisible} />}
      <div
        className={styles.booking}
        style={{ marginRight: "120px" }}
        onClick={() => setModalVisible(true)}
      >
        Book a meet
      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About me</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/service">Services</Link>
          </li>
          <div style={{ position: "relative" }} ref={ref}>
            <li
              className={styles.navItem}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <span>Blog</span>
              <span
                style={{
                  transform: dropdownVisible
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <Image
                  src="/icons/dropdown_white.svg"
                  alt="dropdown"
                  width={8}
                  height={8}
                />
              </span>
            </li>
            {dropdownVisible && (
              <div className={styles.dropdownContainer}>
                <span className={styles.dropdownItem}><Link href="being_boss">Being Your Own Boss</Link></span>
                <span className={styles.dropdownItem}><Link href="tax_planning">Tax Planning</Link></span>
              </div>
            )}
          </div>
          <li
            className={styles.navItem}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>Tax Tools</span>
            <span>
              <Image
                src="/icons/dropdown_white.svg"
                alt="dropdown"
                width={8}
                height={8}
              />
            </span>
          </li>
          <li className={styles.navItem}>
            IRS Updates
          </li>
        </ul>
      </nav>
      <div className={styles.call}>Call us</div>
      <div className={styles.booking}>Where's My Refund?</div>
    </header>
  );
};

export default Header;
