import "./footer.css";
import React from "react";
import logo from "../../assets/MeVitLogo.svg";
import phone from "../../assets/phone.svg";
import post from "../../assets/post.svg";
import address from "../../assets/address.svg";

function Footer() {
  return (
    <div className="footer screen">
      <div className="content">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="item">
          <div className="column">
            <h3>Продукт</h3>
            <a href="#">Features</a>
            <a href="#">Updates</a>
            <a href="#">Pricing</a>
          </div>
          <div className="column">
            <h3>О нас</h3>
            <a href="#">About</a>
            <a href="#">Culture</a>
            <a href="#">Blog</a>
          </div>
          <div className="column">
            <h3>Поддержка</h3>
            <a href="#">Getting started</a>
            <a href="#">Help center</a>
            <a href="#">Server status</a>
          </div>
          <div className="column">
            <h3>Контакты</h3>
            <div className="contacts">
              <img src={post}></img>
              <a href="#">nntu@nntu.ru</a>
            </div>

            <div className="contacts">
              <img src={phone} />
              <a href="#">+7 (831) 436 63 07</a>
            </div>

            <div className="contacts">
              <img src={address} />
              <a href="#">г. Н. Новгород, ул. Минина, 24</a>
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        {/* Вигл-вигл-вигл */}
        <div className="line" />
        <div className="copyright">
          <p>Copyright © 2023</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
