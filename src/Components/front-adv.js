import React from "react";
import Advert from "./icons/advimg.png";

export default function FrontAdv() {
  return (
    <div className="advert-holder">
      <img src={Advert} alt="advertisement image" className="image-adv" />
    </div>
  );
}
