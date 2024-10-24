import React from "react";
import grms from "../../assets/feat/smart_home.jpg";
import network from "../../assets/feat/network.jpg";
import electrical from "../../assets/feat/electrical.jpg";
import light from "../../assets/feat/light.jpg";
import cctv from "../../assets/feat/cctv.jpg";

import "./feat.css";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Feat() {
  useEffect(() => {
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.0/bundled/lenis.js"></script>;

    let workInfoItems = document.querySelectorAll(".work-photo-item");
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work-photo-item", {
      clipPath: function () {
        return "insert(0px 0px 0px 0px";
      },
    });

    const animation = gsap.to(".work-photo-item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 1,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
      markers: true,
    });
  }, []);

  return (
    <div className="wrapp section__padding">
      <h1 className="title__heading wrapp-title">
        Our Services<span className="dot">.</span>
      </h1>
      <p className="p-divider"></p>
      <div className="work">
        <div className="work-left">
          <div className="work-text">
            <div className="work-info">
              <div className="work-title">
                <h1>
                  GRMS Solutions
                  <br />
                </h1>
                <div className="work-info-bar"></div>
              </div>
              <div className="work-body"></div>
            </div>

            <div className="work-info">
              <div className="work-title ">
                <h1>
                  Network Solutions
                  <br />
                </h1>
                <div className="work-info-bar"></div>
              </div>
              <div className="work-body">
                <p> A01</p>
                <div className="work-body-description">
                  <p className="twork-body-description-first">
                    Qualified Workflow
                    <br />
                  </p>
                  <p className="work-body-description-second">
                    Built-in calibration technology, robotics, AI, automated
                    post- processing and sort+stack, and a host of other
                    features make lights-out operation possible.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="work-info">
              <div className="work-title">
                <h1>
                  Electrical Solutions
                  <br />
                </h1>
                <div className="work-info-bar"></div>
              </div>
              <div className="work-body">
                <p> A01</p>
                <div className="work-body-description">
                  <p className="work-body-description-first">
                    Qualified Workflow
                    <br />
                  </p>
                  <p className="work-body-description-second">
                    Built-in calibration technology, robotics, AI, automated
                    post- processing and sort+stack, and a host of other
                    features make lights-out operation possible.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="work-info">
              <div className="work-title">
                <h1>
                  Lighting Solutions
                  <br />
                </h1>
                <div className="work-info-bar"></div>
              </div>
              <div className="work-body">
                <p> A01</p>
                <div className="work-body-description">
                  <p className="work-body-description-first">
                    Qualified Workflow
                    <br />
                  </p>
                  <p className="work-body-description-second">
                    Built-in calibration technology, robotics, AI, automated
                    post- processing and sort+stack, and a host of other
                    features make lights-out operation possible.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="work-info">
              <div className="work-title">
                <h1>
                  CCTV System
                  <br />
                </h1>
                <div className="work-info-bar"></div>
              </div>
              <div className="work-body">
                <p>A01</p>
                <div className="work-body-description">
                  <p className="work-body-description-first">
                    Qualified Workflow
                    <br />
                  </p>
                  <p className="work-body-description-second">
                    Built-in calibration technology, robotics, AI, automated
                    post- processing and sort+stack, and a host of other
                    features make lights-out operation possible.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-right">
          <div className="work-right-bl">
            <div className="work-photo">
              <div className="work-photo-item">
                <img src={grms} alt="" />
              </div>
              <div className="work-photo-item">
                <img src={network} alt="" />
              </div>
              <div className="work-photo-item">
                <img src={electrical} alt="" />
              </div>
              <div className="work-photo-item">
                <img src={light} alt="" />
              </div>
              <div className="work-photo-item">
                <img src={cctv} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feat;
