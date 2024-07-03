import React from "react";
import "./NextSection.css";
import Person1 from "../../assets/person_1.jpg";
import Person2 from "../../assets/person_2.jpg";
import Person3 from "../../assets/person_3.jpg";
const NextSection = () => {
  return (
    <div className="Featuress">
      <div className="Features1">
        <h1>That’s why 100,000+ Love Frame</h1>
        <hr />
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      <div className="cards6">
        <div className="Firstcard">
          <img src={Person1} alt="" />
          <h2>★ ★ ★ ★ ★</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>Garry Alexander</h3>
        </div>
        <div className="Secondcard">
          <img src={Person2} alt="" />
          <h2>★ ★ ★ ★ ★</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>James Robertson</h3>
        </div>
        <div className="thirdcard">
          <img src={Person3} alt="" />
          <h2>★ ★ ★ ★ ★</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>Ben Goodrich</h3>
        </div>
      </div>
      <div className="cards6">
        <div className="Firstcard">
          <img src={Person1} alt="" />
          <h2>★ ★ ★ ★ ☆</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>Kip Hugh</h3>
        </div>
        <div className="Secondcard">
          <img src={Person2} alt="" />
          <h2>★ ★ ★ ★ ★</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>James Robertson</h3>
        </div>
        <div className="thirdcard">
          <img src={Person3} alt="" />
          <h2>★ ★ ★ ★ ★</h2>
          <p>
            Even the all-powerful Pointing <br /> has no control about the blind{" "}
            <br /> texts it is an almost unorthographic <br /> life One day
            however a small line <br /> of blind text by the name of Lorem{" "}
            <br /> Ipsum decided to leave for <br /> the far World of Grammar.
          </p>
          <hr />
          <h3>Ben Goodrich</h3>
        </div>
      </div>
    </div>
  );
};

export default NextSection;
