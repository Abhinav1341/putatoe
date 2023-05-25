import React from "react";
import Location from "./icons/location.png";
import Notif from "./icons/bell.png";
import Cart from "./icons/shopping-cart.png";
import Mic from "./icons/mic.png";
import Search from "./icons/search.png";
import Profile from "./icons/man.png";
import List from "./icons/check-list.png";
import Chat from "./icons/chat.png";
import Putatoe from "./images/logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="top-nav">
        <div className="Location">
          <div className="circle-bcg">
            <img className="locate" src={Location} />
          </div>
          <p className="address">
            Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala Nagar, Uttar Pradesh,
            273004, India
          </p>
        </div>
        <div className="top-right">
          <div className="circle-bcg">
            <img className="Notification" src={Notif} />
          </div>
          <div className="circle-bcg">
            <img className="Cart" src={Cart} />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="bottom-left">
          <img src={Putatoe} className="logo" />
          <div className="Search">
            <img className="search-icon" src={Search} />
            <input
              type="text"
              className="search-box"
              placeholder="Search for Products..."
            ></input>
          </div>
          <div className="circle-bcg">
            <img className="Mic" src={Mic} />
          </div>
        </div>
        <div className="bottom-right">
          <img className="Profile" src={Profile} />
          <img className="Follow-List" src={List} />
          <img className="Chat" src={Chat} />
        </div>
      </div>
    </div>
  );
}
