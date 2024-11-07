import React from "react";
import "./footer.css";

import Logo from "../../assets/navbar/EnsLogo.png";

function footer() {
  return (
    <section className="ens-footer text-white">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column col-1">
            <div className="footer-company">
              <img src={Logo} alt="logo" />
            </div>
            <div className="footer-company-m">
              <p>The Masters Behind the Curtains</p>
            </div>
          </div>
          <div className="footer-column col-2">
            <div className="footer-links">
              <div className="paragraph-white small space">Contact</div>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block"
              >
                <div>Rr. Qemal Stafa, Nr.162, Tirana, Albania.</div>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block"
              >
                <div>info@ens-al.com</div>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block"
              >
                <div>+355 672181183</div>
              </a>
            </div>
          </div>
          <div className="footer-column col-4">
            <div className="footer-links">
              <div className="paragraph-white small space">Quick Links</div>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block hover-shadow hover-color  nav-item"
              >
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block hover-shadow hover-color  nav-item"
              >
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>t</span>
                <span>s</span>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block nav-item"
              >
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block  nav-item"
              >
                <span>S</span>
                <span>e</span>
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
              </a>
              <a
                href="/ens-design/index.html"
                className="footer-link w-inline-block  nav-item"
              >
                <span>W</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
              </a>
            </div>
          </div>
          <div className="footer-column col-3">
            <div className="footer-links">
              <div className="paragraph-white small space">Connect on</div>
              <div className="social">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="social-icon w-inline-block"
                >
                  <div className="icon-embed-custom w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 28 28"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.80229 27.8292C9.87117 27.955 11.9376 28.0044 14 27.9998C16.0622 28.0044 18.1288 27.955 20.1978 27.8292C21.9401 27.7233 23.593 27.1462 24.9711 26.0223C26.2985 24.9398 27.1313 23.4899 27.5457 21.8657C27.9288 20.3653 27.9494 18.8571 27.968 17.4946L27.9685 17.4678C27.9841 16.3156 27.9972 15.1597 28 14.0026V14V13.9974C27.9972 12.8403 27.9841 11.6844 27.9685 10.5322L27.968 10.5054C27.9494 9.14295 27.9286 7.63473 27.5457 6.13419C27.1313 4.50998 26.2985 3.06016 24.9711 1.97773C23.593 0.853853 21.9401 0.276819 20.1978 0.170885C18.1288 0.0450721 16.0622 -0.00451033 14 0.000319674C11.9376 -0.00451033 9.87117 0.0450721 7.80229 0.170885C6.05997 0.276819 4.40701 0.853853 3.02878 1.97773C1.70135 3.06016 0.868607 4.51 0.454137 6.13416C0.071167 7.63496 0.0505634 9.14342 0.0319667 10.5058L0.0316162 10.5322C0.0158429 11.6844 0.00270667 12.8403 0 13.9974V14V14.0026C0.00270667 15.1597 0.0158429 16.3156 0.0316162 17.4678L0.0319667 17.4942C0.0505634 18.8566 0.071167 20.3651 0.454137 21.8659C0.868607 23.4899 1.70135 24.9398 3.02878 26.0223C4.40701 27.1462 6.05997 27.7233 7.80229 27.8292ZM13.9974 25.8123C11.9723 25.8169 9.95167 25.7684 7.93508 25.6457C6.59643 25.5642 5.39481 25.1291 4.41131 24.3271C3.49755 23.5818 2.88979 22.5631 2.57381 21.325C2.26273 20.1059 2.23823 18.8456 2.21898 17.4379C2.20327 16.2892 2.19028 15.1438 2.18759 14C2.19028 12.8562 2.20327 11.7108 2.21898 10.5621C2.23823 9.15434 2.26273 7.89415 2.57381 6.67503C2.88979 5.43685 3.49755 4.41811 4.41131 3.67301C5.39478 2.87102 6.59643 2.43576 7.93508 2.35435C9.95167 2.23171 11.9723 2.18304 13.9974 2.18782H14H14.0026C16.0274 2.18304 18.0483 2.23171 20.0648 2.35435C21.4037 2.43576 22.6051 2.871 23.5886 3.67299C24.5023 4.41809 25.1102 5.43685 25.4261 6.67501C25.7371 7.89413 25.7616 9.15431 25.781 10.5621C25.7966 11.7108 25.8097 12.856 25.8125 14C25.8097 15.144 25.7966 16.2892 25.781 17.4379C25.7616 18.8456 25.7371 20.1059 25.4261 21.325C25.1102 22.5631 24.5023 23.5818 23.5886 24.3271C22.6051 25.1291 21.4037 25.5642 20.0648 25.6457C18.0483 25.7684 16.0274 25.8169 14.0026 25.8123H14H13.9974Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.20117 14.0012C7.20117 17.7567 10.2457 20.8012 14.0012 20.8012C17.7567 20.8012 20.8013 17.7567 20.8013 14.0012C20.8013 10.2457 17.7567 7.20117 14.0012 7.20117C10.2457 7.20117 7.20117 10.2457 7.20117 14.0012ZM14.0012 18.6252C11.4474 18.6252 9.37726 16.555 9.37726 14.0012C9.37726 11.4474 11.4474 9.37724 14.0012 9.37724C16.5551 9.37724 18.6252 11.4474 18.6252 14.0012C18.6252 16.555 16.5551 18.6252 14.0012 18.6252Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M23.2019 6.39882C23.2019 7.28245 22.4856 7.99883 21.6019 7.99883C20.7183 7.99883 20.002 7.28245 20.002 6.39882C20.002 5.51521 20.7183 4.79883 21.6019 4.79883C22.4856 4.79883 23.2019 5.51521 23.2019 6.39882Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="social-icon fb w-inline-block"
                >
                  <div className="icon-embed-custom-2 w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 28 28"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M7.75417 25.5V14.0971H11.2215L11.7415 9.65188H7.75417V6.81433C7.75417 5.52775 8.07667 4.65096 9.75042 4.65096L11.8819 4.64998V0.674042C11.5133 0.621187 10.2481 0.5 8.77542 0.5C5.70021 0.5 3.595 2.57121 3.595 6.37408V9.65188H0.117188V14.0971H3.595V25.5H7.75417Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
