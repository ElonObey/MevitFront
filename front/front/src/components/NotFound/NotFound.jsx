import "./NotFound.css"
import React from "react";
import FailImg from "../../assets/fail.png";

function NotFound() {
  return (
    <div className="notFound">
      <h2>Вы что-то сломали. Поздравляю вас. Теперь опять все чинить...</h2>
      <div className="image">
        <img src={FailImg} />
      </div>
    </div>
  );
};

export { NotFound };