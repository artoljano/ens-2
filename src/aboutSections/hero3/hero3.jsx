import React from "react";
import "./hero3.css";
import Siu from "../../assets/hero/siu.png";
import { motion } from "framer-motion";

function hero3() {
  return (
    <motion.section
      className="hero3"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="hero3-container_left">
        <img src={Siu} alt="" />
      </div>
      <div className="hero3-container_right">
        <h1 className="hero3-title title__heading">John Doe</h1>
        <h2 className="hero3-work-title">
          <span className="last-word">CEO</span>
        </h2>
        <p className="hero3-text">
          {" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Contact Us&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Contact Us&nbsp;
          </span>
        </button>
      </div>
    </motion.section>
  );
}

export default hero3;
