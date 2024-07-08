import React from "react";
import "./ParagraphSection.css";
import { FaCheck } from "react-icons/fa";

const ParagraphSection = (props) => {
  return (
    <>
        <div className="first-para">
          <span>
           <h1> <FaCheck /> {props.heading}</h1>
          </span>
          <p>{props.paragraph1}</p>
        </div>
        
    </>
  );
};

export default ParagraphSection;
