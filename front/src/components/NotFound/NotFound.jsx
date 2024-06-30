import "./NotFound.css"
import React from "react";
import FailImg from "../../assets/fail.png";

function NotFound() {
  return (
    <div className="notFound">
      <h2>Ой! Вы что-то сломали.</h2>
      {/* <div className="image"> */}
        {/* <img src={FailImg} /> */}
      {/* </div> */}
    </div>
  );
};

export { NotFound };