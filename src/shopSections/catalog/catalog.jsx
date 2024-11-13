import React from "react";
import "./catalog.css";

import Disc from "../../assets/products/disc-cat.png";
import Disc1 from "../../assets/products/disc-cat-back.png";

function catalog() {
  return (
    <section className="catalog section__padding">
      {/* <div className="catalog-container"> */}
      <div className="catalog-container">
        <div className="catalog-row">
          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="first" className="catalog-image-container">
              {/* <img src={Disc}  alt="" />
              <img src={Disc1} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">DISC Lite5</div>
              <div className="catalog-info">
                The DISC Lite5 is a compact, high-performance access point
                designed for point-to-point wireless connections. With its
                integrated directional antenna, it offers reliable, high-speed
                connectivity over long distances on the 5 GHz frequency,
                minimizing interference and ensuring strong signal
                stability—ideal for efficient, cost-effective network expansion.
                <br />
              </div>
            </div>
          </div>

          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="second" className="catalog-image-container">
              {/* <img src={Disc} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">CAP AC</div>
              <div className="catalog-info">
                The CAP AC is a dual-band, high-performance access point
                designed for indoor wireless coverage. It delivers fast,
                reliable connectivity with 2.4 GHz and 5 GHz support, making it
                ideal for high-density environments. With a sleek design and
                easy ceiling or wall mounting, it ensures seamless, powerful
                Wi-Fi coverage.
                <br />
              </div>
            </div>
          </div>

          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="first" className="catalog-image-container">
              {/* <img src={Disc}  alt="" />
              <img src={Disc1} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">DISC Lite5</div>
              <div className="catalog-info">
                The DISC Lite5 is a compact, high-performance access point
                designed for point-to-point wireless connections. With its
                integrated directional antenna, it offers reliable, high-speed
                connectivity over long distances on the 5 GHz frequency,
                minimizing interference and ensuring strong signal
                stability—ideal for efficient, cost-effective network expansion.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="catalog-row mt-[10vh]">
          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="second" className="catalog-image-container">
              {/* <img src={Disc} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">CAP AC</div>
              <div className="catalog-info">
                The CAP AC is a dual-band, high-performance access point
                designed for indoor wireless coverage. It delivers fast,
                reliable connectivity with 2.4 GHz and 5 GHz support, making it
                ideal for high-density environments. With a sleek design and
                easy ceiling or wall mounting, it ensures seamless, powerful
                Wi-Fi coverage.
                <br />
              </div>
            </div>
          </div>

          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="first" className="catalog-image-container">
              {/* <img src={Disc}  alt="" />
              <img src={Disc1} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">DISC Lite5</div>
              <div className="catalog-info">
                The DISC Lite5 is a compact, high-performance access point
                designed for point-to-point wireless connections. With its
                integrated directional antenna, it offers reliable, high-speed
                connectivity over long distances on the 5 GHz frequency,
                minimizing interference and ensuring strong signal
                stability—ideal for efficient, cost-effective network expansion.
                <br />
              </div>
            </div>
          </div>
          <div className="catalog-single col-12 col-md-6 col-xl-4 p-4">
            <div id="second" className="catalog-image-container">
              {/* <img src={Disc} alt="" /> */}
            </div>
            <div className="catalog-text">
              <div className="catalog-headline">CAP AC</div>
              <div className="catalog-info">
                The CAP AC is a dual-band, high-performance access point
                designed for indoor wireless coverage. It delivers fast,
                reliable connectivity with 2.4 GHz and 5 GHz support, making it
                ideal for high-density environments. With a sleek design and
                easy ceiling or wall mounting, it ensures seamless, powerful
                Wi-Fi coverage.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default catalog;
