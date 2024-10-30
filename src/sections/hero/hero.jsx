import React from "react";
import "./hero.css";

import HeroImage from "../../assets/hero/Hero.png";

function hero() {
  return (
    <section className="hero">
      <div className="hero-container_left">
        <img src={HeroImage} alt="" />
      </div>
      <div className="hero-container_right">
        <h1 className="hero-title title__heading">
          <span className="last-word">Easy Network</span>{" "}
          <span className="solutions">Solutions</span>.
        </h1>
        <p className="hero-text">
          {" "}
          We turn your requests, into perfect solutions.
        </p>

        <div className="btn-container">
          <a className="btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default hero;
