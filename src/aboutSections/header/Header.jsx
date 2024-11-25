import React from "react";
import "./header.css";

import Group from "../../assets/about/group-picture.jpg";

function Header() {
  return (
    <section className="about-main section__padding">
      <div className="about-main_text-container">
        <div className="main-left">
          <h1 className="main-title">
            It's not the <span className="main-span">technology</span> that wins
            awards, it's the <span className="main-span">people</span> behind
            it.
          </h1>
        </div>
        <div className="main-right">
          <p>
            At the heart of every groundbreaking innovation is a team of
            passionate individuals who bring it to life. This philosophy drives
            everything we do. While technology can dazzle and inspire, it’s the
            creativity, dedication, and vision of the people behind the scenes
            that make it extraordinary. Our mission is to empower these
            individuals—engineers, designers, strategists, and dreamers—who turn
            ideas into impactful solutions. By celebrating their expertise and
            commitment, we’re shaping a future where human ingenuity is as
            celebrated as the tools it creates. After all, it’s not the tool but
            the talent that changes the world.
          </p>

          <a href="#/contact" className="button-text about-contact_button">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>n</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span> </span>
            <span>w</span>
            <span>i</span>
            <span>t</span>
            <span>h</span>
            <span> </span>
            <span>u</span>
            <span>s</span>
            <span> ⇨</span>
          </a>
        </div>
      </div>
      <div className="group-image">
        <img src={Group} alt="group" />
      </div>
    </section>
  );
}

export default Header;
