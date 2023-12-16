import React from "react";
import logo from "../../Assets/logo.jpg";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#welcome-section">
        <div className="logo">
          <img className="logo-img" src={logo} alt="tow truck logo" />
          <h1 className="header-name">ევაკუატორის მომსახურება</h1>
        </div>
      </a>

      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <a href="#about-section">შესახებ</a>
          </li>
          <li>
            <a href="#trucks-section">ავტოპარკი</a>
          </li>
          <li>
            <a href="#contact-section">კონტაქტი</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
