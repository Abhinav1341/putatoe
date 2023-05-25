import React from "react";

export default function ListElementStructure(props) {
  return (
    <div className="liElem">
      <img src={props.source} alt="Product Image" className="imgList" />
      <p className="itemName"> {props.name}</p>
    </div>
  );
}
