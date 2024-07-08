import React from "react";
import "./NextSection.css";
const NextSection = (props) => {
  return (
    <div className="card-element">
      <div className="firstcard">
          <img src={props.image} alt="" />
          <h2>{props.star}</h2>
          <p>
            {props.paragraph}
          </p>
          <h3>{props.name}</h3>
        </div>
        </div>
  );
};

export default NextSection;