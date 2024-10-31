import React from "react";
import "./first.css";

import NetworkS from "../../assets/services-first/networkService.png";
import ElectricalS from "../../assets/services-first/electricalSolution.jpg";
import grmsS from "../../assets/services-first/grmsSolution.jpg";
import cctvS from "../../assets/services-first/cctvSolution.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

function first() {
  return (
    <section className="services-first">
      <div className="services-first_container">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            waitForTransition: true,
          }}
          speed={8000}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img
              loading="lazy"
              className="ensproject-image-box-b-image"
              src={NetworkS}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              className="ensproject-image-box-b-image"
              src={ElectricalS}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              className="ensproject-image-box-b-image"
              src={grmsS}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              className="ensproject-image-box-b-image"
              src={cctvS}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default first;
