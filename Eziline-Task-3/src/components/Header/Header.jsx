// import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="Nav">
      <h1>FRAME</h1>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Pricing">Pricing</a>
          </li>
          <li>
            <a href="Features">Features</a>
          </li>
          <li>
            <a href="reveiws">Reveiws</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text">
        <h1>
          uicookies.com Creates High <br /> Quality Bootstrap Template For{" "}
          <br />
          Free
        </h1>
      </div>
      <div className="btn">
        <button className="btn1">Get Them Now</button>
        <button className="btn2">See Features</button>
      </div>
    </div>
  );
}
 