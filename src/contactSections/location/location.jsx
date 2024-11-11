import React from "react";
import "./location.css";

function location() {
  return (
    <section className="location section__padding">
      <div className="location-header">
        <div className="location-left">
          <h1>Or Come Meet us in Person</h1>

          <p>Easy Network Solutions</p>

          <p>Rr. Qemal Stafa, Nr.162</p>

          <p>Tirane, Albania</p>

          <p style={{ color: "#818285" }}>+355 672181183</p>
          <p style={{ color: "#818285" }}>info@ens-al.com</p>

          <div className="button-container">
            <a
              href="https://www.google.com/maps/place/Easy+Network+Solutions+Tiran%C3%AB+ENS+Mikrotik+and+Network+Services/@41.3330649,19.8296673,15z/data=!4m6!3m5!1s0x1350311576b7310f:0x315b38cb20a1e2d5!8m2!3d41.3330649!4d19.8296673!16s%2Fg%2F1v8syt42?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              className="button-text"
            >
              <span>v</span>
              <span>i</span>
              <span>e</span>
              <span>w</span>
              <span> </span>
              <span>o</span>
              <span>n</span>
              <span> </span>
              <span>m</span>
              <span>a</span>
              <span>p</span>
              <span>s</span>
              <span> </span>
              <span>⇨</span>
            </a>
          </div>
        </div>
        <div className="location-right">
          <img
            className="relative items-center justify-center rounded-[calc(10/16*1rem)] lg:rounded-2xl"
            alt=""
            data-element="parts/image"
            width="500"
            height="625"
            loading="lazy"
            fetchpriority="low"
            srcset="https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1-80x104.png 80w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1-200x260.png 200w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1-400x521.png 400w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 800w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 1200w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 1600w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 2000w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 2400w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 2800w, https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png 3200w"
            src="https://www.sweav.works/wp-content/uploads/2024/08/Kantoor_Amsterdam_Westeinde-14-16_1-1.png"
          />
        </div>
      </div>
    </section>
  );
}

export default location;
