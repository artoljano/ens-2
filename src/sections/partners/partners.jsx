import React from "react";
import "./partners.css";

import Jung from "../../assets/partners/jung.jpg";
import Mikrotik from "../../assets/partners/mikrotik.jpg";

function partners() {
  return (
    <section className="partners">
      <div className="container">
        <h1 className="title__heading wrapp-title">
          Building <span className="dot">strong</span> partnerships for more
          than <span className="dot">20</span> Years
          <span className="dot">.</span>
        </h1>
        <p className="p-divider"></p>

        <div className="partners-content">
          <div className="partners-right">
            <img src={Jung} />

            <h1>JUNG</h1>
            <p>
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="partners-left">
            <img src={Mikrotik} />

            <h1>MikroTik</h1>
            <p>
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="quote">
        {/* <h1 className="title__heading partners-quote">
          Building <span className="dot">strong</span> partnerships for more
          than <span className="dot">10</span> Years
          <span className="dot">.</span>
        </h1> */}
      </div>
    </section>
  );
}

export default partners;
