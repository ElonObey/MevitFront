import React from "react";
import style from "./WhiteButton.module.css"

function WhiteButton({ children, ...props }) {
  return (
    <button {...props} className={style.whiteButton}>
      <p>{children}</p>
    </button>
  );
}

export default WhiteButton;
