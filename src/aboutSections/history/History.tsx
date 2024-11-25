import React from "react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./history.css";

function History() {
  useEffect(() => {
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.0/bundled/lenis.js"></script>;

    ScrollTrigger.create({
      trigger: ".history-content",
      start: "top top",
      end: "bottom bottom",

      scrub: 1,
      pin: ".history-right",
      markers: true,
    });
  }, []);

  // const contentRef = useRef<HTMLDivElement>(null);
  // const scrollTrackRef = useRef<HTMLDivElement>(null);
  // const scrollThumbRef = useRef<HTMLDivElement>(null);
  // const observer = useRef<ResizeObserver | null>(null);

  // const [thumbHeight, setThumbHeight] = useState(20);
  // const [isDragging, setIsDragging] = useState(false);
  // const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  // const [initialContentScrollTop, setInitialContentScrollTop] =
  //   useState<number>(0);

  // function handleResize() {
  //   if (scrollTrackRef.current && contentRef.current) {
  //     const { clientHeight: trackSize } = scrollTrackRef.current;
  //     const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } =
  //       contentRef.current;
  //     setThumbHeight(
  //       Math.max((contentVisible / contentTotalHeight) * trackSize, 20)
  //     );
  //   }
  // }

  // function handleThumbPosition() {
  //   if (
  //     !contentRef.current ||
  //     !scrollTrackRef.current ||
  //     !scrollThumbRef.current
  //   ) {
  //     return;
  //   }

  //   const { scrollTop: contentTop, scrollHeight: contentHeight } =
  //     contentRef.current;
  //   const { clientHeight: trackHeight } = scrollTrackRef.current;

  //   let newTop = (contentTop / contentHeight) * trackHeight;
  //   newTop = Math.min(newTop, trackHeight - thumbHeight);
  //   console.log(newTop);
  //   const thumb = scrollThumbRef.current;
  //   requestAnimationFrame(() => {
  //     thumb.style.top = `${newTop}px`;
  //   });
  // }

  // useEffect(() => {
  //   if (contentRef.current) {
  //     const content = contentRef.current;
  //     console.log(content);
  //     observer.current = new ResizeObserver(() => {
  //       handleResize();
  //     });
  //     observer.current.observe(content);
  //     content.addEventListener("scroll", handleThumbPosition);
  //     return () => {
  //       observer.current?.unobserve(content);
  //       content.removeEventListener("scroll", handleThumbPosition);
  //     };
  //   }
  // }, []);

  // function handleThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setScrollStartPosition(e.clientY);
  //   if (contentRef.current)
  //     setInitialContentScrollTop(contentRef.current.scrollTop);
  //   setIsDragging(true);
  // }

  // function handleThumbMouseup(e: MouseEvent) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (isDragging) {
  //     setIsDragging(false);
  //   }
  // }

  // function handleThumbMousemove(e: MouseEvent) {
  //   if (contentRef.current) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     if (isDragging) {
  //       const {
  //         scrollHeight: contentScrollHeight,
  //         clientHeight: contentClientHeight,
  //       } = contentRef.current;

  //       const deltaY =
  //         (e.clientY - scrollStartPosition) *
  //         (contentClientHeight / thumbHeight);

  //       const newScrollTop = Math.min(
  //         initialContentScrollTop + deltaY,
  //         contentScrollHeight - contentClientHeight
  //       );

  //       contentRef.current.scrollTop = newScrollTop;
  //     }
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("mousemove", handleThumbMousemove);
  //   document.addEventListener("mouseup", handleThumbMouseup);
  //   return () => {
  //     document.removeEventListener("mousemove", handleThumbMousemove);
  //     document.removeEventListener("mouseup", handleThumbMouseup);
  //   };
  // }, [handleThumbMousemove, handleThumbMouseup]);

  // function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { current: track } = scrollTrackRef;
  //   const { current: content } = contentRef;
  //   if (track && content) {
  //     const { clientY } = e;
  //     const target = e.target as HTMLDivElement;
  //     const rect = target.getBoundingClientRect();
  //     const trackTop = rect.top;
  //     const thumbOffset = -(thumbHeight / 2);
  //     const clickRatio =
  //       (clientY - trackTop + thumbOffset) / track.clientHeight;
  //     const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
  //     content.scrollTo({
  //       top: scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  // function handleScrollButton(direction: "up" | "down") {
  //   const { current: content } = contentRef;
  //   if (content) {
  //     const scrollAmount = direction === "down" ? 200 : -200;
  //     content.scrollBy({ top: scrollAmount, behavior: "smooth" });
  //   }
  // }

  return (
    <div id="mySection" className="history section__padding">
      <div className="history-content">
        <div className="history-right">
          <div className="history-right_inner">
            <p>Story</p>
            <h1>
              Journey <span className="history-span">Markers</span>
              <br />& Achievements
            </h1>
            <div className="history-progress" role="scrollbar">
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
    </div>
  );
}

export default History;
