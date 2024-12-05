import React, { useEffect, useState } from "react";
import "./navbarM.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/navbar/EnsLogo.png";
import $ from "jquery";

// const Menu = () => (
//   <>
//     <p>
//       <a href="/" className="m-nav-item" onClick={() => setShowMenu(false)}>
//         <span>Home</span>
//       </a>
//     </p>
//     <p>
//       <a
//         href="#/products"
//         className="m-nav-item"
//         onClick={() => setShowMenu(false)}
//       >
//         <span>Products</span>
//       </a>
//     </p>
//     <p>
//       <a
//         href="#/about"
//         className="m-nav-item"
//         onClick={() => setShowMenu(false)}
//       >
//         <span>About</span>
//       </a>
//     </p>
//     <p>
//       <a
//         href="#/services"
//         className="m-nav-item"
//         onClick={() => setShowMenu(false)}
//       >
//         <span>Services</span>
//       </a>
//     </p>
//     <p>
//       <a
//         href="#/projects"
//         className="m-nav-item"
//         onClick={() => setShowMenu(false)}
//       >
//         <span>Work</span>
//       </a>
//     </p>
//     <p>
//       <a
//         href="#/contact"
//         className="m-nav-item"
//         onClick={() => setShowMenu(false)}
//       >
//         <span>Contact</span>
//       </a>
//     </p>
//   </>
// );

function NavbarM() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu === true) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "scroll";
    }
    console.log(showMenu);
  });

  return (
    <div className="navbarM">
      <div className="navbarM-logo">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            style={{
              zIndex: "801",
              position: "absolute",
              left: "2vh",

              width: "110px",
              heigh: "60px",
            }}
          />
        </a>
      </div>
      <div className="navbarM-menu">
        {showMenu ? (
          <RiCloseLine
            color="orange"
            style={{
              zIndex: "801",
              position: "absolute",
              right: "2vh",
              top: "2vh",
            }}
            size={30}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="orange"
            style={{
              zIndex: "801",
              position: "absolute",
              right: "2vh",
              top: "2vh",
            }}
            size={30}
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <div
            className="ens__navbar-menu_container"
            style={{ overflow: "hidden" }}
          >
            {/* <div className="ens__navbar-menu_container-links"> */}
            <p>
              <a
                href="/"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>Home</span>
              </a>
            </p>
            <p>
              <a
                href="#/products"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>Products</span>
              </a>
            </p>
            <p>
              <a
                href="#/about"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>About</span>
              </a>
            </p>
            <p>
              <a
                href="#/services"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>Services</span>
              </a>
            </p>
            <p>
              <a
                href="#/projects"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>Work</span>
              </a>
            </p>
            <p>
              <a
                href="#/contact"
                className="m-nav-item"
                onClick={() => setShowMenu(false)}
              >
                <span>Contact</span>
              </a>
            </p>
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarM;
