import React, { useEffect } from "react";
import "./projects.css";
import { useRef } from "react";

import ArenaKombetare from "../../assets/projects/11.jpg";
import Mugo from "../../assets/projects/mugo20.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

function projects() {
  return (
    <section className="projects">
      <div className="about-title">
        <h1 className="title__heading wrapp-title">
          Our <span className="dot">Projects</span>.
        </h1>
        <p className="p-divider"></p>
      </div>
      <div className="ensproject-image-row">
        <Swiper
          edgeFriction={1}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          speed={8000}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div id="Mariott" className="ensproject-image-box-b effect">
              {/* <img
                loading="lazy"
                className="ensproject-image-box-b-image"
                src={ArenaKombetare}
              /> */}
              <div className="ensproject-desc">
                <h1>Hotel Mariot</h1>
              </div>
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
          </SwiperSlide>
          <SwiperSlide>
            <a href="/projects">
              <div id="Mugo" className="ensproject-image-box-s effect">
                {/* <img
                loading="lazy"
                className="ensproject-image-box-b-image"
                src={Mugo}
              /> */}
                <div className="ensproject-desc">
                  <h1>Mugo Restaurant</h1>
                </div>
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
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <div id="griffin" className="ensproject-image-box-b effect">
              {/* <img
                loading="lazy"
                className="ensproject-image-box-b-image"
                src={ArenaKombetare}
              /> */}
              <div className="ensproject-desc">
                <h1>Griffin Restaurant</h1>
              </div>
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
          </SwiperSlide>
          <SwiperSlide>
            <div id="Mugo-t" className="ensproject-image-box-s effect">
              {/* <img
                loading="lazy"
                className="ensproject-image-box-b-image"
                src={Mugo}
              /> */}
              <div className="ensproject-desc">
                <h1>Mugo Terrace</h1>
              </div>
              <div className="image-box-work">
                <a href="/services">
                  <div className="image-box-work-item">
                    <h1 className="short-description">Network</h1>
                  </div>
                </a>
                <a href="/services">
                  <div className="image-box-work-item">
                    <h1 className="short-description">Electric</h1>
                  </div>
                </a>
                <a href="/services">
                  <div className="image-box-work-item">
                    <h1 className="short-description">Lighting</h1>
                  </div>
                </a>
                <a href="/services">
                  <div className="image-box-work-item">
                    <h1 className="short-description">Wi-Fi system</h1>
                  </div>
                </a>
                <a href="/services">
                  <div className="image-box-work-item">
                    <h1 className="short-description">CCTV</h1>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <a href="/about" className="button-text-projects">
        <span>e</span>
        <span>x</span>
        <span>p</span>
        <span>l</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
        <span> </span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span> </span>
        <span>p</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
        <span> </span>
        <span>⇨</span>
      </a>
    </section>
  );
}

export default projects;
