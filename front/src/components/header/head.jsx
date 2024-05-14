import "./head.css";
import React from "react";
import logo from "../../assets/MeVitLogo.svg";
import login from "../../assets/Login.svg";
import { Link } from "react-router-dom";


function Head() {
  return (
    <header className="head">
      <div className="screen">
        <div className="content">
          <a className="logo" href="/">
            <img src={logo}></img>
          </a>

          <div className="block">
            <div className="component">
              <Link to="/">Главная</Link>
            </div>
            <div className="component">
              <Link to="">О нас</Link>
            </div>
            <div className="component">
              <Link to="">Помощь</Link>
            </div>
          </div>

          <a className="black-button">
            <img src={login}></img>
            <p> Вход </p>
          </a>
        </div>
      </div>
    </header>
  );
}

export { Head };
