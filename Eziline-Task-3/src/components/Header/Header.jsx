import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="Nav">
        <div className="Nav--row">
          <h1>FRAME</h1>
          <button className="nav-toggle" onClick={toggleNav}>
            ☰
          </button>
        </div>
        <ul className={isNavOpen ? "nav-open" : ""}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Reviews">Reviews</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
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
