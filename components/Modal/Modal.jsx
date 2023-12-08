"use client";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Modal = ({ setModalVisible }) => {
  const picks = [
    "Tax Planning Strategies",
    "Tax Prep",
    "Retirement Strategies",
    "Financial Coaching",
  ];
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activePick, setActivePick] = useState(picks[0]);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setDropdownVisible(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/\D/g, '');
    setPhoneNumber(formattedValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidPhone = phoneNumber.length === 10;
    setIsValid(isValidPhone);

  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => setModalVisible(false)}>
          <Image src="/icons/close.svg" alt="close" width={40} height={40} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.formContainer}>
            <h2 className={styles.title}>Book a Consultation</h2>
            <div className={styles.form}>
              <div className={styles.firstLine}>
                <div className={styles.inputContainer}>
                  <span className={styles.label}>Name</span>
                  <input className={styles.input} placeholder="Name" />
                </div>
                <div className={styles.inputContainer}>
                  <span className={styles.label}>Phone number</span>
                  <input
                    style={{border: !isValid ? "1px solid red" : "none"}}
                    className={styles.input}
                    placeholder="Type your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className={styles.firstLine}>
                <div className={styles.inputContainer} style={{ width: "92%" }}>
                  <span className={styles.label}>Select date</span>
                  <input
                    className={styles.input}
                    placeholder="Select date"
                    type="datetime-local"
                  />
                </div>
              </div>
              <div className={styles.firstLine}>
                <div className={styles.inputContainer} style={{ width: "92%" }}>
                  <span className={styles.label} style={{ color: "#00388C" }}>
                    Select Service
                  </span>
                  <div style={{ position: "relative" }}>
                    <div
                      className={styles.inputDropdown}
                      onClick={() => {
                        dropdownVisible
                          ? setDropdownVisible(false)
                          : setDropdownVisible(!dropdownVisible);
                      }}
                      ref={ref}
                    >
                      <span className={styles.inputText}>{activePick}</span>
                      <span
                        className={styles.icon}
                        style={{
                          transform: dropdownVisible
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <Image
                          alt="arrow"
                          src="/icons/dropdown.svg"
                          width={24}
                          height={24}
                        />
                      </span>
                    </div>
                    {dropdownVisible && (
                      <ul className={styles.dropdownContainer}>
                        {picks.map((pick, index) => {
                          return (
                            <li
                              className={styles.dropdownPick}
                              key={index}
                              onClick={() => {
                                setActivePick(pick);
                                setDropdownVisible(false);
                              }}
                            >
                              {pick}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn} onClick={(e) => handleSubmit(e)}>Make an Appointment</button>
          </div>
          <Image src="/about.png" alt="about" width={521} height={525} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
