import React from "react";
import "./HeadingText.css"
const HeadingText = (props) => {
  return (
    <>
    <div className="heading-text">
      <h2>{props.heading}</h2>
      <hr />
      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p>
    </div>
    </>
  );
};

export default HeadingText;
