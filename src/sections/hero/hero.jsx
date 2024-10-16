import React from "react";
import "./hero.css";

import HeroImage from "../../assets/hero/Hero.png";

function hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-container_left">
          <img src={HeroImage} alt="" />
        </div>
        <div className="hero-container_right">
          <h1 className="hero-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="hero-text">
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="hero-button btn-text">Contact Us</p>
        </div>
      </div>
    </section>
  );
}

export default hero;
