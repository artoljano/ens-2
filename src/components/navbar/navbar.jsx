import React from "react";
import "./navbar.css";
import Logo from "../../assets/navbar/EnsLogo.png";

function navbar() {
  return (
    <section className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-menu_links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default navbar;
