import React, { useState } from "react";
import "./navbarM.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/navbar/EnsLogo.png";

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
      <a href="#/products" className="hover-shadow hover-color nav-item">
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
      <a href="#/about" className="hover-shadow hover-color nav-item">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </a>
    </p>
    <p>
      <a href="#/services" className="hover-shadow hover-color nav-item">
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
      <a href="#/projects" className="hover-shadow hover-color nav-item">
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
      <a href="#/contact" className="hover-shadow hover-color nav-item">
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

function NavbarM() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbarM">
      <div className="navbarM-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbarM-menu">
        {showMenu ? (
          <RiCloseLine
            color="black"
            size={30}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={30}
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <div className="ens__navbar-menu_container scale-up-center">
            <div className="ens__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarM;
