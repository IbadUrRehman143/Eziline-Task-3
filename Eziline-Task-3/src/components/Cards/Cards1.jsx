import React from "react";
import "./Cards1.css";
import { FaCheck } from "react-icons/fa";
import Button from "../Button/Button";

const Cards1 = (props) => {
  return (
    <div className="card">
      <h2>{props.heading}</h2>
      <p className="price">{props.price}</p>
      <p className="para">{props.para}</p>
      <ul className="list">
        <li>
          <span>
            <FaCheck />
          </span>
          Pointing has no control
        </li>
        <li>
          <span>
            <FaCheck />
          </span>
          A small river named Duden flows
        </li>
        <li>
          <span>
            <FaCheck />
          </span>
          Roasted parts of sentences fly into your mouth
        </li>
      </ul>
      <Button buttonText="Get Started"/>
    </div>
  );
};

export default Cards1;
