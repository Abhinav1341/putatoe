import React from "react";
import Daily from "./images/dailyneeds.jpg";
import Construction from "./images/construction.jpg";
import Consult from "./images/consultancy.jpg";

export default function Services() {
  return (
    <div className="service-cards">
      <div className="title-popularservice">All Popular Service Providers</div>
      <div className="cards-temp">
        <div className="Card">
          <img className="service-image" src={Daily} alt="Daily Needs" />
        </div>
        <div className="Card">
          <img className="service-image" src={Construction} alt="Daily Needs" />
        </div>
        <div className="Card">
          <img className="service-image" src={Consult} alt="Daily Needs" />
        </div>
      </div>
    </div>
  );
}
