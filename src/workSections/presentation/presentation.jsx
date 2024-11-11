import React from "react";
import "./presentation.css";

import Mariott from "../../assets/projects/11.jpg";
import MugoR from "../../assets/projects/mugo20.jpg";
import Griffin from "../../assets/projects/griffin.jpg";
import MugoT from "../../assets/projects/mugo-terrace.jpg";
import Griffin1 from "../../assets/projects/griffin-1.jpg";
import MugoC from "../../assets/projects/MugoC.jpg";
import Miamar from "../../assets/projects/miamar.jpg";
import Elysium from "../../assets/projects/elysium.jpg";
import Toptani from "../../assets/projects/toptani.jpg";
import Inter from "../../assets/projects/Intercontinental.jpg";
import Airport from "../../assets/projects/Airport.jpg";

function presentation() {
  return (
    <section className="presentation section__padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[60px] lg:gap-y-[80px]">
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Marriott"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Mariott}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Hotel Marriott Tirana
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px] leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                Fully accessible, WebGL experience integrating Mastercard’s
                sonic brand into a dynamic digital pass.
              </p>
              <p className="leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Network Solution, GRMS, Lighting
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/narcos">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="MugoR"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={MugoR}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className="text-[21px] font-medium leading-[115%]">
                  Mugo Restaurant
                </h2>
                <p className="leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px] leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                Immersive NARCOS storefront and digital collectibles.
              </p>
              <p className="leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Electrical and Network Solution, Wi-Fi, CCTV, Lighting
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/hypernative">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Hypernative"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Griffin1}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Griffin Restaurant
                </h2>
                <p className="leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px] leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                Rebranded and expanded website with a modern elevated presence.
              </p>
              <p className="leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Electrical and Network Solution, Wi-Fi, CCTV, Lighting
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/hypernative">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="MugoC"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={MugoC}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Mulliri i Vjeter
                </h2>
                <p className="leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px] leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                Rebranded and expanded website with a modern elevated presence.
              </p>
              <p className="leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Electrical and Network Solution, Wi-Fi, CCTV, Lighting, IPTV
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/christies">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Elysium"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Elysium}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Elysium Hotel
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px]  leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                {" "}
                The Christie's Art+Tech Summit 2024
              </p>
              <p className=" leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Network Solution, Wi-Fi, CCTV
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/christies">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Miamar"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Miamar}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Miamar Hotel
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px]  leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                {" "}
                The Christie's Art+Tech Summit 2024
              </p>
              <p className=" leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Network Solution, Wi-Fi, CCTV, Lighting, IPTV
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/christies">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Toptani"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Toptani}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Toptani
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px]  leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                {" "}
                The Christie's Art+Tech Summit 2024
              </p>
              <p className=" leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Wi-Fi System
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/christies">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Airport"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Airport}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Tirana International Airport
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  2024
                </p>
              </div>
              <p className="mb-[4px] text-[18px]  leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                {" "}
                The Christie's Art+Tech Summit 2024
              </p>
              <p className=" leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Wi-Fi System
              </p>
            </div>
          </a>
        </div>
        <div className="view__grid-item opacity-0 presentation-content">
          <a className="cursor-pointer" href="/work/christies">
            <div className="relative">
              <div className="overflow-hidden aspect-[16/9] rounded-[1rem] mb-[32px]">
                <img
                  alt="Inter"
                  fetchpriority="high"
                  width="2880"
                  height="1652"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-[16/9] object-cover hover:scale-[1.1] transition-all duration-300 ease-in-out rounded-[1rem] presentation-img"
                  src={Inter}
                />
              </div>
              <div className="flex justify-between mb-[4px]">
                <h2 className=" text-[21px] font-medium leading-[115%]">
                  Intercontinental Hotel
                </h2>
                <p className=" leading-[180%] text-[#5A5A5A] md:pr-[57px]">
                  Ongoing
                </p>
              </div>
              <p className="mb-[4px] text-[18px]  leading-[180%] text-[#5A5A5A] tracking-[-0.48px]">
                {" "}
                The Christie's Art+Tech Summit 2024
              </p>
              <p className=" leading-[180%] text-[#A2A2A2] tracking-[-0.48px]">
                Electrical and Network Solution, GRMS, Lighting, Wi-Fi System,
                CCTV, IPTV
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default presentation;
