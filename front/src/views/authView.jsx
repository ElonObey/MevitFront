import React from "react";
import bigLogo from "../assets/bigLogo.svg";
import "./auth.css";

function AuthView() {
  return (
    <>
      <div className="screen authWrapper">
        <div className="bigLogo">
          <img src={bigLogo} />
        </div>
      </div>
    </>
  );
}

export default AuthView;
