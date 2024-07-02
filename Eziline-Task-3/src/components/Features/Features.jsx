import React from "react";
import "./Features.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
const Features = () => {
  return (
    <div className="Features">
      <div className="Features1">
        <h1>Features</h1>
        <hr />
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      <div className="Features2">
          <img src={Image1} alt="" />
        <div className="FeaturesDetails">
          <h2>Big Benefits for Small Business</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <ul>
            <li>Pointing has no control </li>
            <li> A small river named Duden flows</li>
            <li>Roasted parts of sentences fly into your mouth</li>
          </ul>
        </div>
      </div>
      <div className="Features3">
        <div className="FeaturesDetails">
          <h2>Big Benefits for Small Business</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <ul>
            <li>Pointing has no control </li>
            <li> A small river named Duden flows</li>
            <li>Roasted parts of sentences fly into your mouth</li>
          </ul>
        </div>
          <img src={Image2} alt="" />
      </div>
      <div className="Features4">
          <img src={Image1} alt="" />
        <div className="FeaturesDetails">
          <h2>Big Benefits for Small Business</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <ul>
            <li>Pointing has no control </li>
            <li> A small river named Duden flows</li>
            <li>Roasted parts of sentences fly into your mouth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
