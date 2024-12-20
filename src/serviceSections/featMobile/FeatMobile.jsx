import React from "react";
import "./featMobile.css";

import grms from "../../assets/feat/smart_home.jpg";
import network from "../../assets/feat/network.jpg";
import electrical from "../../assets/feat/electrical.jpg";
import light from "../../assets/feat/light.jpg";
import cctv from "../../assets/feat/cctv.jpg";

function FeatMobile() {
  return (
    <section className="m-wrapp">
      <div className="m-work">
        <div className="m-work-right">
          <div className="m-work-right-bl">
            <div className="m-work-photo-item">
              <img src={grms} alt="" />
            </div>
            <div className="m-work-info">
              <div className="m-work-title">
                <h1>
                  GRMS Solutions
                  <br />
                </h1>
                <div className="m-work-info-bar"></div>
              </div>
              <div className="m-work-body">
                <div className="m-work-service_desc">
                  <p>
                    Our Guest Room Management System (GRMS) is designed to
                    elevate the guest experience while optimizing hotel
                    operations. This smart solution integrates seamlessly with
                    room controls, allowing guests to personalize their
                    environment, from lighting and temperature to entertainment
                    and service requests, all from a user-friendly interface.
                  </p>
                </div>
                <div className="m-work-service_off">
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 01</p>

                      <p className="m-work-body-description-first">
                        Lighting (ON/OFF or dimmer)
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 02</p>

                      <p className="m-work-body-description-first">
                        Openings (curtains, rolling shutters)
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 03</p>

                      <p className="m-work-body-description-first">
                        HVAC system Guest services (DND-DoNotDisturb,
                        MUR-MakeUpRoom)
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 04</p>

                      <p className="m-work-body-description-first">
                        Guest presence/absence detection
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 05</p>

                      <p className="m-work-body-description-first">
                        Seamless communication with Front Office Desk via
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-work-photo-item">
              <img src={network} alt="" />
            </div>
            <div className="m-work-info">
              <div className="m-work-title ">
                <h1>
                  Network Solutions
                  <br />
                </h1>
                <div className="m-work-info-bar"></div>
              </div>
              <div className="m-work-body">
                <div className="m-work-service_desc">
                  <p>
                    Our network solutions provide businesses with robust,
                    scalable, and secure infrastructure to keep operations
                    running smoothly and efficiently. We specialize in designing
                    and implementing customized networks that meet the unique
                    needs of each organization, ensuring reliable connectivity,
                    enhanced data security, and seamless integration with
                    existing systems.With a focus on minimizing downtime and
                    optimizing performance, our team ensures that your network
                    infrastructure is resilient, future-proof, and equipped to
                    handle evolving demands, keeping your business connected and
                    secure at all times.
                  </p>
                </div>
                <div className="m-work-service_off">
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 01</p>

                      <p className="m-work-body-description-first">
                        Designing and Implementation of LAN
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 02</p>

                      <p className="m-work-body-description-first">
                        Network Auditing
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 03</p>

                      <p className="m-work-body-description-first">
                        Site Planning using operation research techniques and
                        scheduling cable laying
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 04</p>

                      <p className="m-work-body-description-first">
                        Network Management
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 05</p>

                      <p className="m-work-body-description-first">
                        Network Security Planning and Implementation
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 06</p>

                      <p className="m-work-body-description-first">
                        Structured Cabling
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 07</p>

                      <p className="m-work-body-description-first">
                        Best network devices
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 08</p>

                      <p className="m-work-body-description-first">
                        Excellent IT support service
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-work-photo-item">
              <img src={electrical} alt="" />
            </div>
            <div className="m-work-info">
              <div className="m-work-title">
                <h1>
                  Electrical Solutions
                  <br />
                </h1>
                <div className="m-work-info-bar"></div>
              </div>
              <div className="m-work-body">
                <div className="m-work-service_desc">
                  <p>
                    Our electrical solutions deliver safe, efficient, and
                    reliable power management tailored to your needs. From
                    design and installation to maintenance, we uphold the
                    highest safety and efficiency standards. Specializing in
                    lighting, energy management, automation, and sustainable
                    options, we help reduce costs and enhance productivity.
                    Whether for residential, commercial, or industrial projects,
                    our solutions keep your power systems running smoothly and
                    sustainably.
                  </p>
                </div>
                <div className="m-work-service_off">
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 01</p>

                      <p className="m-work-body-description-first">
                        Project design
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 02</p>

                      <p className="m-work-body-description-first">
                        Selection of the best type and quantity of cable and
                        associated devices (such as switches, distribution
                        boards, sockets, and light fittings)
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 03</p>

                      <p className="m-work-body-description-first">
                        Precise labeling of cables to identify functions for
                        each device within the panel
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 04</p>

                      <p className="m-work-body-description-first">
                        Measurements for ensuring proper placement of designated
                        threads in corresponding panel clamps
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 05</p>

                      <p className="m-work-body-description-first">
                        Monitoring
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 06</p>

                      <p className="m-work-body-description-first">
                        Delivery
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 07</p>

                      <p className="m-work-body-description-first">
                        Maintenance
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 08</p>

                      <p className="m-work-body-description-first">
                        Excellent support service
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-work-photo-item">
              <img src={light} alt="" />
            </div>
            <div className="m-work-info">
              <div className="m-work-title">
                <h1>
                  Lighting Solutions
                  <br />
                </h1>
                <div className="m-work-info-bar"></div>
              </div>
              <div className="m-work-body">
                <div className="m-work-service_desc">
                  <p>
                    Our lighting solutions enhance ambiance, improve energy
                    efficiency, and meet the unique needs of each space. We
                    offer expert design, installation, and maintenance, using
                    LED technology and smart controls to reduce costs and create
                    inviting environments. Whether for accent lighting,
                    workspaces, or energy-saving upgrades, our solutions bring
                    your vision to light.
                  </p>
                </div>
                <div className="m-work-service_off">
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 01</p>

                      <p className="m-work-body-description-first">
                        Characteristic design
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 02</p>

                      <p className="m-work-body-description-first">
                        Innovative products
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 03</p>

                      <p className="m-work-body-description-first">
                        Shading systems
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 04</p>

                      <p className="m-work-body-description-first">
                        Modular, acoustically-effective partitioning
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 05</p>

                      <p className="m-work-body-description-first">
                        High-quality LED lighting systems, battery powered
                        lighting, cableless luminaires
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-work-photo-item">
              <img src={cctv} alt="" />
            </div>
            <div className="m-work-info">
              <div className="m-work-title">
                <h1>
                  CCTV System
                  <br />
                </h1>
                <div className="m-work-info-bar"></div>
              </div>
              <div className="m-work-body">
                <div className="m-work-service_desc">
                  <p>
                    Our CCTV solutions provide comprehensive security and peace
                    of mind with high-quality video surveillance tailored to
                    your needs. From system design and installation to
                    maintenance and remote monitoring, we ensure reliable, 24/7
                    protection for residential, commercial, and industrial
                    spaces. Using advanced technology, including HD cameras and
                    smart analytics, our solutions enhance security and support
                    proactive risk management.
                  </p>
                </div>
                <div className="m-work-service_off">
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 01</p>

                      <p className="m-work-body-description-first">
                        CCTV systems maintenance for medium and large
                        enterprises
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 02</p>

                      <p className="m-work-body-description-first">
                        CCTV configuration and management at government
                        facilities
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 03</p>

                      <p className="m-work-body-description-first">
                        Installation and setup of CCTV systems ranging from 20
                        to 300 cameras
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 04</p>

                      <p className="m-work-body-description-first">
                        Full on-site design and implementation of the CCTV
                        system
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="m-work-service_off_row">
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 05</p>

                      <p className="m-work-body-description-first">
                        Setup of CCTV feeds over wireless, wired, and
                        fiber-optic connections
                        <br />
                      </p>
                    </div>
                    <div className="m-work-service_off_single">
                      <p className="m-work-service_number"> 06</p>

                      <p className="m-work-body-description-first">
                        Maintenance
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatMobile;
