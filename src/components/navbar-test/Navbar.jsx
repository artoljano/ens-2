import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/navbar/EnsLogo.png";

const Navbar = () => {
  const Menu = () => (
    <>
      <p>
        <a href="#home" className="hover-shadow hover-color">
          <span>H</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </a>
      </p>
      <p>
        <a href="#wgpt3" className="hover-shadow hover-color">
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>p</span>
        </a>
      </p>
      <p>
        <a href="#possibility" className="hover-shadow hover-color">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span> </span>
          <span>U</span>
          <span>s</span>
        </a>
      </p>
      <p>
        <a href="#features" className="hover-shadow hover-color">
          <span>S</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </a>
      </p>
      <p>
        <a href="#blog" className="hover-shadow hover-color">
          <span>O</span>
          <span>u</span>
          <span>r</span>
          <span> </span>
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
        </a>
      </p>
    </>
  );

  //change nav class when scrolling
  const [cName, setClassName] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 20) {
      setClassName(true);
    } else {
      setClassName(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <div className="menu">
      <div
        className={
          cName
            ? "ens__navbar ens__navbar--scrolled ens__navbar--border"
            : "ens__navbar "
        }
      >
        <div className="ens__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="ens__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
