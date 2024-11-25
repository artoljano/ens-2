import React, { useEffect } from "react";

import "./hero.css";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="services-hero">
      <div className="services-hero_container">
        <div className="services-hero_wrap">
          <div className="services-hero_title">
            <h1>Services</h1>
          </div>
          <div className="services-hero_subtitle">
            <h2>Your Vision, Our Commitment</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
