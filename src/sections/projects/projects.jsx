import React from "react";
import "./projects.css";

import ArenaKombetare from "../../assets/projects/11.jpg";
import Mugo from "../../assets/projects/mugo20.jpg";

function projects() {
  return (
    <section className="projects">
      <h1 className="title__heading wrapp-title">
        Our <span className="dot">Projects</span>.
      </h1>
      <p className="p-divider"></p>

      <div className="ensproject-image-row">
        <div className="ensproject-image-box-b">
          <img
            loading="lazy"
            className="ensproject-image-box-b-image"
            src={ArenaKombetare}
          />
          <div className="image-box-work">
            <div className="image-box-work-item">
              <h1 className="short-description">GRMS</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Network</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Lighting</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Guest Services</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">HVAC control</h1>
            </div>
          </div>
        </div>
        <div className="ensproject-image-box-s">
          <img
            loading="lazy"
            className="ensproject-image-box-b-image"
            src={Mugo}
          />
          <div className="image-box-work">
            <div className="image-box-work-item">
              <h1 className="short-description">Network</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Electric</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Lighting</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">Wi-Fi system</h1>
            </div>
            <div className="image-box-work-item">
              <h1 className="short-description">CCTV</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects;
