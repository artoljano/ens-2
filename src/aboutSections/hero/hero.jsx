import { useEffect } from "react";
import React from "react";

import "./hero.css";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="about-hero">
      <div className="about-hero_container">
        <div className="about-hero_wrap">
          <div className="about-hero_title">
            <h1>About Us</h1>
          </div>
          <div className="about-hero_subtitle">
            <h2>Meet the Team Behind Our Vision</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
