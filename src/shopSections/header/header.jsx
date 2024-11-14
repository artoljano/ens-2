import React from "react";
import "./header.css";

import HomeNetwork from "../../assets/products/home-network.jpg";
import smartHelec from "../../assets/products/smart-h-elect.jpg";
import SmartHome from "../../assets/products/smart-home.jpg";
import SmartLight from "../../assets/products/smart-li.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";

function header() {
  return (
    <section className="shop-header">
      <Swiper
        effect="coverflow"
        loop={true} // Enables looping
        coverflowEffect={{
          rotate: 30, // Reduced rotation for smoother transitions
          stretch: 10, // Slight stretch for a smoother appearance
          depth: 200, // Reduced depth can help with smoother transitions
          modifier: 1, // Lower values can make it appear less exaggerated
          slideShadows: false, // Consider disabling shadows for a cleaner look
        }}
        speed={1200} // Transition speed in milliseconds (e.g., 1000 ms = 1 second)
        slidesPerView="auto"
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade, FreeMode, EffectCoverflow]}
      >
        <SwiperSlide>
          <div id="ShopMariott" className="shop-header-image">
            <img src={smartHelec} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div id="ShopGriffin" className="shop-header-image">
            <img src={HomeNetwork} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="ShopMugo" className="shop-header-image">
            <img src={SmartHome} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="ShopMugo-t" className="shop-header-image">
            <img src={SmartLight} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default header;
