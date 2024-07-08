import React, { useState } from "react";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button.jsx";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="header-wrapper">
        <nav>
            <h1><a href="">FRAME</a></h1>
            { 
              !isNavOpen ? 
                <IoIosMenu className="menu-button" onClick={toggleNav} /> : 
                <RxCross2 className="menu-button" onClick={toggleNav} />
            }
          <ul className={isNavOpen ? "open-nav" : ""}>
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
        </nav>
  
        <div className="header-text">
          <h3>uicookies.com Creates High Quality Bootstrap Template For Free</h3>
        </div>
        
        <div className="buttons">
          <Button buttonText="Get Them Now"/>
          <Button buttonText="See Features"/>
        </div>
      </div>
    </header>
  );
}
