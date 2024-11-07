import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/navbar/EnsLogo.png";

const Navbar = () => {
  const Menu = () => (
    <>
      <p>
        <a href="/" className="hover-shadow hover-color nav-item">
          <span>H</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </a>
      </p>
      <p>
        <a href="/products" className="hover-shadow hover-color nav-item">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>d</span>
          <span>u</span>
          <span>t</span>
          <span>s</span>
        </a>
      </p>
      <p>
        <a href="/about" className="hover-shadow hover-color nav-item">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </a>
      </p>
      <p>
        <a href="/services" className="hover-shadow hover-color nav-item">
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
        <a href="/projects" className="hover-shadow hover-color nav-item">
          {/* <span>O</span>
          <span>u</span>
          <span>r</span>
          <span> </span> */}
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
        </a>
      </p>
      <p>
        <a href="/projects" className="hover-shadow hover-color nav-item">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
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
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="ens__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
