import React from "react";
import "./intro.css";

import Group from "../../assets/about/colleagues.jpg";

function Intro() {
  return (
    <section className="intro section__padding">
      <div className="intro-container">
        <div className="intro-container-left">
          <div className="intro-quote-card">
            <div className="intro-quote-card_quotation">
              {" "}
              <svg
                width="80"
                height="80"
                viewBox="0 0 59 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dean-class"
                  d="M4.35459 39.591L4.36008 39.5988L4.36587 39.6064C7.08813 43.1933 10.7001 45 15.1604 45C18.9493 45 21.9555 44.0214 24.1068 41.9975L24.1074 41.9969C26.3595 39.8709 27.4906 37.2306 27.4906 34.1083C27.4906 30.907 26.5644 28.3722 24.6492 26.5819C22.8638 24.8008 20.4576 23.9333 17.4906 23.9333C15.1661 23.9333 13.2404 24.4764 11.7602 25.603C11.7321 25.2368 11.717 24.7888 11.717 24.2542C11.717 20.6694 12.8703 17.4978 15.1859 14.7202C17.4504 12.004 21.1103 10.5383 26.2849 10.4207L26.7736 10.4096V9.92083V1.5V0.984626L26.2584 1.00023C18.2823 1.24182 11.9397 3.54058 7.28828 7.94528L7.28825 7.94525L7.28348 7.94989C2.74314 12.3656 0.5 18.4799 0.5 26.225C0.5 31.4454 1.77658 35.9097 4.35459 39.591ZM35.364 39.591L35.3695 39.5988L35.3753 39.6064C38.0976 43.1933 41.7096 45 46.1698 45C49.9587 45 52.9649 44.0214 55.1162 41.9975L55.1168 41.9969C57.3689 39.8709 58.5 37.2306 58.5 34.1083C58.5 30.907 57.5738 28.3723 55.6587 26.582C53.8733 24.8008 51.4671 23.9333 48.5 23.9333C46.1755 23.9333 44.2499 24.4764 42.7696 25.603C42.7416 25.2368 42.7264 24.7888 42.7264 24.2542C42.7264 20.6694 43.8797 17.4978 46.1954 14.7202C48.4598 12.004 52.1197 10.5383 57.2944 10.4207L57.783 10.4096V9.92083V1.5V0.984626L57.2679 1.00023C49.2917 1.24182 42.9492 3.54058 38.2977 7.94528L38.2977 7.94525L38.2929 7.94989C33.7526 12.3656 31.5094 18.4799 31.5094 26.225C31.5094 31.4454 32.786 35.9097 35.364 39.591Z"
                  stroke="#f2ab29"
                ></path>
              </svg>
            </div>
            <div className="intro-quote-card_content">
              <div className="intro-quote-card_quote">
                <p>
                  As a technology enthusiast and problem-solver, I’ve always
                  been inspired by the transformative power of innovation. When
                  we founded Easy Network Solutions, the goal was clear: to
                  deliver immediate, effective IT solutions that empower
                  businesses to overcome challenges and embrace the future. It’s
                  this vision that continues to drive us every day.
                </p>
              </div>
              <div className="intro-quote-card_author">
                <h1>Artol Jano</h1>
                <p>Co-Founder & CEO of ENS</p>
              </div>
            </div>
          </div>

          <div className="intro-container-left_members">
            <h1>10</h1>
            <p>Team Members</p>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-image">
            <img src={Group} alt="" />
          </div>
          <div className="intro-card-text">
            <h1>We show the world it's possible.</h1>

            <p>
              Easy Network Solutions, based in Tirana, Albania, has been at the
              forefront of IT services since its establishment in 2004. Driven
              by the growing demand for prompt and reliable technological
              solutions, the company is committed to simplifying complex systems
              for businesses. <br />
              <br />
              Our innovative approach ensures clients receive cutting-edge,
              tailored services that enable them to thrive in an increasingly
              connected world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
