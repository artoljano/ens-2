import React from "react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./history.css";

function History() {
  const [scrollPercentage, setScrollPercentage] = useState(20);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercent =
      (scrollPosition / (documentHeight - windowHeight)) * 100;
    console.log(scrollPercent);
  };

  useEffect(() => {
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.0/bundled/lenis.js"></script>;

    ScrollTrigger.create({
      trigger: ".history",
      start: "top top",
      end: "bottom bottom",

      scrub: 1,
      pin: ".history-right",
      // markers: true,
    });
  }, []);

  return (
    <section className="history section__padding">
      <div className="history-content">
        <div className="history-right">
          <div className="history-right_inner">
            <p>Story</p>
            <h1>
              Journey <span className="history-span">Markers</span>
              <br />& Achievements
            </h1>
            <div onScroll={handleScroll} className="history-progress">
              {" "}
              <div className="history-progress_inner">
                {" "}
                <div className="history-progress_dot"></div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="history-left">
          <div className="history-left_inner">
            <div className="history-left_item">
              <p className="history-left_item-timeline">The Beginning</p>
              <h1 className="history-left_item-date">2015-2016</h1>
              <p className="history-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="history-left_item">
              <p className="history-left_item-timeline">The Beginning</p>
              <h1 className="history-left_item-date">2015-2016</h1>
              <p className="history-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="history-left_item">
              <p className="history-left_item-timeline">The Beginning</p>
              <h1 className="history-left_item-date">2015-2016</h1>
              <p className="history-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="history-left_item">
              <p className="history-left_item-timeline">The Beginning</p>
              <h1 className="history-left_item-date">2015-2016</h1>
              <p className="history-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="history-left_item">
              <p className="history-left_item-timeline">The Beginning</p>
              <h1 className="history-left_item-date">2015-2016</h1>
              <p className="history-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
