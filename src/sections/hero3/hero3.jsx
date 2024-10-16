import React from "react";
import "./hero3.css";
import Siu from "../../assets/hero/siu.png";

function hero3() {
  return (
    <section className="hero3">
      <div className="hero3-container">
        <div className="hero3-container_left">
          <img src={Siu} alt="" />
        </div>
        <div className="hero3-container_right">
          <h1 className="hero3-title">Lorem Ipsum Dolor.</h1>
          <p className="hero3-text">
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="hero3-button btn-text">Contact Us</p>
        </div>
      </div>
    </section>
  );
}

export default hero3;