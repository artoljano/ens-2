import React from "react";
import "./hero2.css";

import hero6 from "../../assets/hero/hero6.png";
import test from "../../assets/hero/test.png";
import test1 from "../../assets/hero/test1.png";

import { motion } from "framer-motion";

function hero2() {
  return (
    <motion.section
      className="hero2 section__padding"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="hero2-container_left">
        <h1 className="hero2-title title__heading">
          Lorem Ipsum <span className="last-word">Dolor</span>.
        </h1>

        <p className="hero2-text">
          {" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="btn-container1">
          <a className="button-65">Contact Us</a>
        </div>
      </div>
      <div className="hero2-container_right">
        {/* <img src={test} id="img1" />
        <img src={test1} id="img2" /> */}
        {/* <img src={hero6} alt="" /> */}
      </div>
    </motion.section>
  );
}

export default hero2;
