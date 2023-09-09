import React from "react";
import styles from "./Note.module.css";
export default function Note(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className={styles["note"]}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button>DELETE</button>
    </div>
  );
}
