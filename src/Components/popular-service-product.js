import React from "react";
import ListElementStructure from "./list-items";
import LiOne from "./images/List1/1.image.jpg";
import Sample from "./images/List1/sample.jpg";
import dailyneed from "./images/List1/DailyNeed.jpeg";
import Consult from "./images/List1/consultMe.png";

export default function PopularServices() {
  return (
    <div className="popular-services">
      <div className="title-popularservice">Popular Service Products</div>
      <div className="elements-popularservice">
        <p className="pop-categories">Daily Needs</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure name="Almond Milk" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Litchi Juice" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Amla Juice" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Aaloo Bhujia" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Bikaneri Bhujia" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Apples" source={dailyneed} />
          </li>
          <li>
            <ListElementStructure name="Khatta Meetha" source={dailyneed} />
          </li>
        </ul>
      </div>
      <div className="elements-popularservice">
        <p className="pop-categories">Construction</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure name="Royal Brick" source={LiOne} />
          </li>
          <li>
            <ListElementStructure name="Dehri Bihar Morang" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Acc Gold" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Ultratech PPC" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Ultratech Paper bag" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Wire" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="KJS Cement" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Chotti Gitti" source={Sample} />
          </li>
          <li>
            <ListElementStructure name="Galent Sariya 8mm" source={Sample} />
          </li>
        </ul>
      </div>
      <div className="elements-popularservice">
        <p className="pop-categories">Consultancy</p>
        <ul className="item-blocks-list">
          <li>
            <ListElementStructure
              name="Incorporation of Public Company"
              source={Consult}
            />
          </li>
          <li>
            <ListElementStructure
              name="Incorporation of Private"
              source={Consult}
            />
          </li>
          <li>
            <ListElementStructure
              name="Incorporation of Nidhi Company"
              source={Consult}
            />
          </li>
          <li>
            <ListElementStructure
              name="Incorporation of Producers"
              source={Consult}
            />
          </li>
          <li>
            <ListElementStructure name="APERA Registration" source={Consult} />
          </li>
          <li>
            <ListElementStructure
              name="Startup India Registraion"
              source={Consult}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
