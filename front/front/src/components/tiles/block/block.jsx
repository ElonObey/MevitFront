import styles from "./block.module.css";
import React from "react";

function template(props) {
  return (
    <div className={styles.block}>
      <div className={styles.textBlock}>
        <h3> {props.title}</h3>
      </div>
    </div>
  );
}

export default template;
