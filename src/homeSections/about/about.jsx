import React from "react";
import "./about.css";

function about() {
  return (
    <section className="about">
      <h1 className="title__heading wrapp-title">
        About Us<span className="dot">.</span>
      </h1>

      <div className="about-left">
        <div className="left-container">
          <h1>BECOME A PART OF OUR STORY</h1>
          <div className="left-container_para">
            <p>
              It's people, not just technology, that drive our success. Every
              solution we deliver—whether it's in network infrastructure,
              electrical systems, lighting, CCTV, or more—reflects our
              commitment to putting people first.
            </p>
            <p>
              Our mission is simple: to create innovative, dependable solutions
              that make a meaningful impact. We believe that the best work comes
              from a team that values trust, collaboration, and creativity. It’s
              why we prioritize partnerships, not just projects, and why we’re
              always looking to connect with people who share our vision for
              excellence.
            </p>

            <p>
              If you want to see the team behind the technology, explore the
              talented individuals who make it all possible.
            </p>
            <p>meet the team.</p>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="right-container">
          <div className="right-container-card">
            <img />
            <h1></h1>
            <p></p>
          </div>
          <div className="right-container-card">
            <img />
            <h1></h1>
            <p></p>
          </div>
          <div className="right-container-card">
            <img />
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
