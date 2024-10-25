import React from "react";
import "./partners1.css";

import Jung from "../../assets/partners/jung.jpg";
import Mikrotik from "../../assets/partners/mikrotik.jpg";

function partners1() {
  return (
    <section className="partners1">
      <h1 className="title__heading wrapp-title">
        Building <span className="dot">strong</span> partnerships for more than{" "}
        <span className="dot">20</span> Years
        <span className="dot">.</span>
      </h1>
      <p className="p-divider"></p>
      <div className="parnter1-image">
        <img src={Jung} alt="partner1" />
      </div>
    </section>
  );
}

export default partners1;
