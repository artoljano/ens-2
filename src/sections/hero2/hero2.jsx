import React from "react";
import "./hero2.css";

import Goat from "../../assets/hero/goat.png";

function hero2() {
  return (
    <section className="hero2">
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
        <img src={Goat} alt="" />
      </div>
    </section>
  );
}

export default hero2;
