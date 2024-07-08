import React from "react";
import Image from "../../assets/image1.png";
import { FaCheck } from "react-icons/fa";
import "./CardImg.css";
const CardImg = () => {
  return (
    <div className="imageheading">
      <img src={Image}  />
      <div className="textdetail">
        <h1>Big Benefits for Small Business</h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <ul>
            <li><a href="#"><span><FaCheck/></span>Pointing has no control</a></li>
            <li><a href="#"><span><FaCheck/></span>A small river named Duden flows</a></li>
            <li><a href="#"><span><FaCheck/></span>Roasted parts of sentences fly into your mouth</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CardImg;
