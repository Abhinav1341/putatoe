import React from "react";

export default function Card(props) {
  return (
    <div className="shopping-card">
      <img className="img-shopping-cart" src={props.image} alt="cover block" />
      <div className="nameElem-shopping-cart">{props.item}</div>
      <div className="percentOf">
        Up to <div className="number-shop">{props.number} </div>
      </div>
    </div>
  );
}
