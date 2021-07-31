import React from "react";
import { Carousel } from "react-bootstrap";
import "components/homeComponents/slider.css";
import Photo01 from "asserts/homeSlider/slider01.jpg";
import Photo02 from "asserts/homeSlider/slider02.jpg";
import Photo03 from "asserts/homeSlider/slider03.jpg";
import Photo04 from "asserts/homeSlider/slider04.jpg";
import Photo05 from "asserts/homeSlider/slider05.jpg";
import Photo06 from "asserts/homeSlider/slider06.jpg";
import Photo07 from "asserts/homeSlider/slider07.jpg";

function Slider() {
  return (
    <div className="slideshow">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo01} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo02} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo03} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo04} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo05} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo06} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo07} alt="slide images" />
          <Carousel.Caption>
            <h3>Top Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
