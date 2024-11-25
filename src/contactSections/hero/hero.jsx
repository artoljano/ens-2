import React, { useEffect } from "react";
import "./hero.css";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="contact-hero">
      <div className="contact-hero_container">
        <div className="contact-hero_wrap">
          <div className="contact-hero_title">
            <h1>Contact</h1>
          </div>
          <div className="contact-hero_subtitle">
            <h2>Have a project in mind?</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
