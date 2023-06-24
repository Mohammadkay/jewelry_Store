import Carousel from "react-bootstrap/Carousel";
import React from "react";

// we use bootstrap react to create image slider
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "600px" ,objectFit:"cover"}}
          className="d-block w-100"
          src="./image/j1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>LIVE THE MOMENT</h1>
          <h3>welcome to the World Jewelry </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "600px" ,objectFit:"cover"}}
          className="d-block w-100"
          src="./image/j2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>LIVE THE MOMENT</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px" ,objectFit:"cover" }}
          className="d-block w-100"
          src="./image/j3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>LIVE THE MOMENT</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
