import React from "react";
import "./historyMobile.css";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HistoryMobile() {
  const [scrollY, setScrollY] = useState(0);
  const [dotLocation, setDotLoaction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);
  useEffect(() => {
    if (scrollY < 2000) {
      setDotLoaction(0);
    } else if (scrollY > 3900) {
      setDotLoaction(1915);
    } else if (scrollY > 2000 && scrollY < 3900) {
      setDotLoaction(scrollY - 2000);
    }
  }, [scrollY]);

  return (
    <div className="historyMobile">
      <div className="historyMobile-content">
        <div className="historyMobile-right">
          <div className="historyMobile-right_inner">
            <div className="historyMobile-progress" role="scrollbar">
              {" "}
              <div className="historyMobile-progress_inner">
                {" "}
                <div
                  className="historyMobile-progress_dot"
                  style={{
                    transform: `translateY(${dotLocation}%)`,
                  }}
                ></div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="historyMobile-left">
          <div id="history-sticky" className="history-right-mobile">
            <p>Story</p>
            <h1>
              Journey <span className="historyMobile-span">Markers</span>
              <br />& Achievements
            </h1>
            <div className="history-right-mobile-transparentDiv"></div>
          </div>
          <div id="historyMobile-hide" className="historyMobile-left_inner">
            <div className="historyMobile-left_item">
              <p className="historyMobile-left_item-timeline">The Beginning</p>
              <h1 className="historyMobile-left_item-date">2015-2016</h1>
              <p className="historyMobile-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="historyMobile-left_item">
              <p className="historyMobile-left_item-timeline">The Beginning</p>
              <h1 className="historyMobile-left_item-date">2015-2016</h1>
              <p className="historyMobile-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="historyMobile-left_item">
              <p className="historyMobile-left_item-timeline">The Beginning</p>
              <h1 className="historyMobile-left_item-date">2015-2016</h1>
              <p className="historyMobile-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="historyMobile-left_item">
              <p className="historyMobile-left_item-timeline">The Beginning</p>
              <h1 className="historyMobile-left_item-date">2015-2016</h1>
              <p className="historyMobile-left_item-description">
                The idea of CargoKite was born at the Technical University of
                Munich. Inspired by the airborne wind energy technology, Marcus
                Bischoff dedicates his academic research to CargoKite and sets
                out to prove the general technical feasibility of the
                combination of kites and actively controlled hydrofoils.
              </p>
            </div>
            <div className="historyMobile-left_item">
              <p className="historyMobile-left_item-timeline">The Beginning</p>
              <h1 className="historyMobile-left_item-date">2015-2016</h1>
              <p className="historyMobile-left_item-description">
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
    </div>
  );
}

export default HistoryMobile;
