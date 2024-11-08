import React from "react";
import "./partners.css";

import Jung from "../../assets/partners/jung.jpg";
import JungLogo from "../../assets/partners-logo/jung_logo.svg";
import Mikrotik from "../../assets/partners/mikrotik.jpg";

function partners() {
  return (
    <section className="partners section__padding">
      <div className="about-title">
        <h1 className="title__heading wrapp-title">
          Together We Achieve More<span className="dot">.</span>
        </h1>
        <p className="p-divider"></p>
      </div>

      <div class="partner-section-full">
        <div class="partner-image-container header-effect">
          <img src={Jung} alt="Partner Name" class="partner-image-full" />
          <div class="text-overlay">
            <img src={JungLogo} alt="Logo" class="partner-logo" />
            <div class="text-column">
              <h3>Commitment to Excellence</h3>
              <p>
                Describe the partner's dedication to providing value or support.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum
              </p>
            </div>
            <div class="text-column">
              <h3>Working Together</h3>
              <p> Areas where we work closely.</p>
            </div>
            <div class="text-column">
              <h3>Together We Grow</h3>
              <p> How working together creates a positive impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default partners;
