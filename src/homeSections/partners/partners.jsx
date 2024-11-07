import React from "react";
import "./partners.css";

import Jung from "../../assets/partners/jung.jpg";
import Mikrotik from "../../assets/partners/mikrotik.jpg";

function partners() {
  return (
    <section class="partners section__padding">
      <div className="about-title">
        <h1 className="title__heading wrapp-title">
          Meet The <span className="dot">Partners</span>.
        </h1>
        <p className="p-divider"></p>
      </div>
    </section>
  );
}

export default partners;
