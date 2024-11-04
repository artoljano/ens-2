import React from "react";
import "./partners1.css";

import Jung from "../../assets/partners/jung.jpg";
import Mikrotik from "../../assets/partners/mikrotik.jpg";
import Ruckus from "../../assets/partners/Ruckus.jpg";
import JungLogo from "../../assets/partners-logo/jung_logo.svg";
import MikrotikLogo from "../../assets/partners-logo/mikrotik_logo.svg";
import RuckusLogo from "../../assets/partners-logo/ruckus_logo.svg";

function partners1() {
  return (
    <section className="partners1">
      <h1 className="title__heading wrapp-title">
        Building strong <span className="dot">Partnerships</span> for more than
        20 Years
        <span className="dot">.</span>
      </h1>
      <p className="p-divider"></p>

      <div className="partners1-content">
        <div className="partners1-content_left">
          <p className="content-text">
            In today’s interconnected world, partnerships are the cornerstone of
            success. By collaborating with trusted partners, we’re able to
            leverage unique expertise, drive innovation, and expand our reach.
            Together, we build stronger solutions, enhance service quality, and
            create value that extends beyond what we could achieve alone. Our
            partnerships are founded on mutual trust and a shared vision,
            enabling us to better serve our clients and contribute positively to
            our industries and communities.
          </p>

          <div className="parterns1-card-image_left">
            <img src={Ruckus} id="img1" />
            <img src={RuckusLogo} id="img2" />
          </div>
        </div>
        <div className="parterns1-cards">
          <div className="parterns1-card-image">
            <img src={Jung} id="img1" />
            <img src={JungLogo} id="img2" />
          </div>
          <div className="parterns1-card-image">
            <img src={Mikrotik} id="img1" />
            <img src={MikrotikLogo} id="img2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default partners1;
