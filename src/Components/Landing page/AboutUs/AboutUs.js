import React from "react";
import "./AboutUs.css";
import Pic from "./Images/Pic.jpg";
function AboutUs() {
  return (
    <div className="AboutUSconntainer">
      <h1>Why Us </h1>
      <div className="Center">
        <img src={Pic} alt="" />
        <div className="Text">
          <h1>Jewellery Store </h1>
          <div className="Text2">
            <p>
              Jewellery Store is one of the chief precious stone adornments
              producers. Serving more than 5000 clients crosswise over the USA,
              UK, Latin America, Australia, and Canada.{" "}
            </p>
            <br />

            <p>
              By owning all parts of the store network, including precious stone
              sourcing, cutting, combination, and gems fabricating.Jewellery
              Store is resolved to give the most ideal incentive to Jewelers all
              through the world.{" "}
            </p>
            <br />

            <p>
              We will probably enable the autonomous gem dealer to remain in
              front of their opposition and give their retail clients the
              exceptional deals that keep them returning for additional.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
