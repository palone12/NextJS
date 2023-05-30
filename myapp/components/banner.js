import React from "react";
import styles from "./banner.module.css";
const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{" "}
        <span className={styles.title2}>Connoisseurs</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffe shops!</p>
      <button onClick={props.handleButtonClick} className={styles.button}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
