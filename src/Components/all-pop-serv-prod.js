import React from "react";
import ListElementStructure from "./list-items";
import Prof from "./images/List1/prof.avif";

export default function AllPopularServices() {
  const title = {
    backgroundColor: "#00829614",
    fontSize: "2.2rem",
    textAlign: "center",
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
    color: "#008296",
    fontWeight: "700",
    borderRadius: "1.2rem",
  };
  const elements = {
    backgroundColor: "rgb(235,235,235)",
    color: "#008296",
    width: "62rem",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    paddingBottom: "1rem",
    borderRadius: "1rem",
  };

  return (
    <div className="popular-service-providers">
      <div className="title-popularservice">All Popular Service Providers</div>
      <div className="elements.popularservice">
        <p className="pop-categories">Daily Needs</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure
              name="Ghanshyam Provision (Main)"
              source={Prof}
            />
          </li>
          <li>
            <ListElementStructure name="Krishna Complex Super" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Spencer's" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Hamsub Mart" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Om General Store" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Chand Super Bazaar" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Ghar Kirana Mart" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Pushpa Mart" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Fresh mart" source={Prof} />
          </li>
        </ul>
      </div>

      <div className="elements.popularservice">
        <p className="pop-categories">Construction</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure
              name="Ghanshyam Provision (Main)"
              source={Prof}
            />
          </li>
          <li>
            <ListElementStructure name="Gangotri Building" source={Prof} />
          </li>
          <li>
            <ListElementStructure
              name="Gangotri Devi Constructions"
              source={Prof}
            />
          </li>
          <li>
            <ListElementStructure name="Pulak Shop" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Singh Bulding Material" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Suprabha Interiors" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Star Traders Interior" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Aarambh Travels" source={Prof} />
          </li>
        </ul>
      </div>

      <div className="elements.popularservice">
        <p className="pop-categories">Consultancy</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure
              name="Ghanshyam Provision (Main)"
              source={Prof}
            />
          </li>
          <li>
            <ListElementStructure name="CA Ram Gupta" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Nitin Naveen Verma" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Imraan Raeeni" source={Prof} />
          </li>
          <li>
            <ListElementStructure name="Coorporate Raasta" source={Prof} />
          </li>
        </ul>
      </div>
    </div>
  );
}
