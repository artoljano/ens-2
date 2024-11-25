import React from "react";
import "./about.css";

import Experience from "../../assets/about/exp.png";
import TeamWork from "../../assets/about/techtw.png";
import Loyalty from "../../assets/about/loyalty-m.jpg";

function about() {
  return (
    <section className="about section__padding">
      <div className="about-title">
        <h1 className="title__heading wrapp-title">
          <span className="dot">About</span> Us<span className="dot">.</span>
        </h1>
        <p className="p-divider"></p>
      </div>
      <div className="about-left">
        <div className="about-container">
          <div className="left-container">
            <h1>BECOME A PART OF OUR STORY</h1>
            <div className="left-container_para">
              <p style={{ fontStyle: "italic" }}>
                It's not the technology that wins awards, it's the people behind
                it.
              </p>
              <p>
                Our mission is simple: to create innovative, dependable
                solutions that make a meaningful impact. We believe that the
                best work comes from a team that values trust, collaboration,
                and creativity. It’s why we prioritize partnerships, not just
                projects, and why we’re always looking to connect with people
                who share our vision for excellence.
              </p>

              <p>
                If you want to see the team behind the technology, explore the
                talented individuals who make it all possible.
              </p>

              <a href="#/about" className="button-text">
                <span>m</span>
                <span>e</span>
                <span>e</span>
                <span>t</span>
                <span> </span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span> </span>
                <span>t</span>
                <span>e</span>
                <span>a</span>
                <span>m</span>
                <span> </span>
                <span>⇨</span>
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="right-container">
              <div className="right-container-card">
                <img src={Experience} alt="" />
                <h1>Experience</h1>
                <p>
                  Our team brings years of expertise to every project, ensuring
                  reliable and innovative solutions. We leverage our experience
                  to create impactful results that meet our clients' needs.
                </p>
              </div>
              <div className="right-container-card">
                <img src={TeamWork} alt="" />
                <h1>Team Work</h1>
                <p>
                  Collaboration is at the heart of everything we do, fostering
                  creativity and trust. We believe that the best results come
                  from working together toward a shared vision.
                </p>
              </div>
              <div className="right-container-card">
                <img src={Loyalty} alt="" />
                <h1> Loyalty</h1>
                <p>
                  We prioritize building long-term relationships with our
                  clients and partners. Our commitment to people-first solutions
                  drives loyalty and trust in all that we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
