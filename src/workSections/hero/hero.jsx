import React, { useEffect } from "react";

import "./hero.css";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="work-hero">
      <div className="work-hero_container">
        <div className="work-hero_wrap">
          <div className="work-hero_title">
            <h1>Projects</h1>
          </div>
          <div className="work-hero_subtitle">
            <h2>Turning Visions into Reality</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
