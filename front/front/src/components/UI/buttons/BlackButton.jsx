import React from "react";
import style from "./BlackButton.module.css";

function BlackButton({ children, ...props }) {
  return (
    <button {...props} className={style.blackButton}>
      <p>{children}</p>
    </button>
  );
}

export default BlackButton;
