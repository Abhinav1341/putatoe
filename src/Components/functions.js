import React from "react";
import FunctionElement from "./func-elem";
import First from "./images/one.png";
import Second from "./images/two.png";
import Third from "./images/three.png";
import Four from "./images/four.png";
import Five from "./images/five.png";
import Six from "./images/six.png";
import Seven from "./images/seven.png";
import Eight from "./images/eight.png";
import Nine from "./images/nine.png";
import Ten from "./images/ten.png";
import Eleven from "./images/eleven.png";
import Twelve from "./images/twelve.png";

export default function Functions() {
  return (
    <>
      <div className="grid-functions">
        <div>
          <FunctionElement text="Prepaid Mobile Recharge" source={First} />
        </div>
        <div>
          <FunctionElement text="DTH Recharge" source={Second} />
        </div>
        <div>
          <FunctionElement text="Loans" source={Third} />
        </div>
        <div>
          <FunctionElement text="Promotion" source={Four} />
        </div>
        <div>
          <FunctionElement text="News" source={Five} />
        </div>
        <div>
          <FunctionElement text="Blogs" source={Six} />
        </div>
        <div>
          <FunctionElement text="Jobs" source={Seven} />
        </div>
        <div>
          <FunctionElement text="Anonymouos Feedback" source={Eight} />
        </div>
        <div>
          <FunctionElement text="Gas Booking" source={Nine} />
        </div>
        <div>
          <FunctionElement text="Electricity Bill" source={Ten} />
        </div>
        <div>
          <FunctionElement text="Water Bill" source={Eleven} />
        </div>
        <div>
          <FunctionElement text="See More" source={Twelve} />
        </div>
      </div>
    </>
  );
}
