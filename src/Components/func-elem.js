import React from "react";

export default function FunctionElement(props) {
  return (
    <div className="grid-box-elem">
      <img src={props.source} className="images" alt="function" />
      <p className="functionName">{props.text}</p>
    </div>
  );
}
