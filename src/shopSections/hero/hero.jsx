import React, { useEffect } from "react";

import "./hero.css";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="shop-hero">
      <div className="shop-hero_container">
        <div className="shop-hero_wrap">
          <div className="shop-hero_title">
            <h1>Products</h1>
          </div>
          <div className="shop-hero_subtitle">
            <h2>Unleash Possibilities with Our Product Range</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
