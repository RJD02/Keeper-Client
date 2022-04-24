import React from "react";
import styles from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={styles["heading"]}>
      <h1>Keeper</h1>
      <i
        onClick={() => props.refresh()}
        className="fa-solid fa-arrow-rotate-right"
      ></i>
    </header>
  );
};
