import "./search.css";
import React from "react";
import search from "../../../assets/search.svg";
function template() {
  return (
    <div className="search">
      <form action="" method="get">
        <input type="search" name="s" placeholder="Введите название модуля" />
        <button type="submit">
          <img src={search}></img>
        </button>
      </form>
    </div>
  );
}

export default template;
