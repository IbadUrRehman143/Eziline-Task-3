import React from "react";
import "./AnotherSection.css";
import Laptop from "../../assets/laptop_1.jpg";
const AnotherSection = () => {
  return (
    <div className="Feeaturees">
      <div className="Feeatures1">
        <h1>Try It Today</h1>
        <hr />
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <button>Get It Now</button>
      </div>
      <div className="pc">
        <img src={Laptop} alt="" />
      </div>
    </div>
  );
};

export default AnotherSection;
