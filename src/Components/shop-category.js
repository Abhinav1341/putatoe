import React from "react";
import CategoryItem from "./images/coverblock.jpeg";
import Card from "./shopping-card";
import Dairy from "./images/List1/Dairy.jpeg";
import Ghee from "./images/List1/ghee.webp";
import Biscuits from "./images/List1/bisuits.webp";
import DryFruits from "./images/List1/dry.webp";
import Choclate from "./images/List1/choclate.webp";
import Ataa from "./images/List1/ataa.jpg";
import Chips from "./images/List1/chips.webp";
import Juice from "./images/List1/juices.jpg";

export default function ShopCategory() {
  return (
    <div className="shop-category">
      <div className="title">SHOP BY CATEGORY</div>
      <div className="elements">
        <h2>Daily Needs</h2>
        <div className="item-list-daily-needs">
          <div>
            <Card image={Dairy} item="Dairy" number="10% OFF" />
          </div>
          <div>
            <Card image={Juice} item="Juices" number="10% OFF" />
          </div>
          <div>
            <Card image={Chips} item="Chips and Namkeens" number="10% OFF" />
          </div>
          <div>
            <Card image={Biscuits} item="Biscuits" number="10% OFF" />
          </div>
          <div>
            <Card image={Ataa} item="Aata / Ataa" number="10% OFF" />
          </div>
          <div>
            <Card
              image={Choclate}
              item="Sweets and Chocolates"
              number="10% OFF"
            />
          </div>
          <div>
            <Card image={DryFruits} item="Dry Fruits" number="10% OFF" />
          </div>
          <div>
            <Card image={Ghee} item="Ghee and Oil" number="10% OFF" />
          </div>
        </div>
      </div>
      <div className="elements">
        <h2>Construction</h2>
        <div className="item-list">
          <Card image={CategoryItem} item="Cover Block" number="0% OFF" />
        </div>
      </div>
    </div>
  );
}
