import React, { useEffect, useState } from "react";
import "./navbarM.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/navbar/EnsLogo.png";
import $ from "jquery";

function NavbarM() {
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.4,
      },
    },
  };

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
    <div
      className={
        cName ? "navbarM navbarM--scrolled navbarM--border" : "navbarM"
      }
    >
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
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="ens__navbar-menu_container"
              style={{ overflow: "hidden" }}
              variants={item}
              initial={{ height: "0", opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              {/* <div className="ens__navbar-menu_container-links"> */}
              <p>
                <motion.a
                  href="/"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 1 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1.2,
                    },
                  }}
                >
                  <span>Home</span>
                </motion.a>
              </p>
              <p>
                <motion.a
                  href="#/products"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <span>Products</span>
                </motion.a>
              </p>
              <p>
                <motion.a
                  href="#/about"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  <span>About</span>
                </motion.a>
              </p>
              <p>
                <motion.a
                  href="#/services"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                >
                  <span>Services</span>
                </motion.a>
              </p>
              <p>
                <motion.a
                  href="#/projects"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                >
                  <span>Work</span>
                </motion.a>
              </p>
              <p>
                <motion.a
                  href="#/contact"
                  className="m-nav-item"
                  onClick={() => setShowMenu(false)}
                  initial={{ y: "90", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                >
                  <span>Contact</span>
                </motion.a>
              </p>
              {/* </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavbarM;
