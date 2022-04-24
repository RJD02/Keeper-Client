import React from "react";
import styles from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={styles["loader-wrapper"]}>
      <div className={styles["loader"]}></div>;
    </div>
  );
}
