import React from "react";
import { Carousel } from "react-bootstrap";
import "components/homeComponents/slider.css";
import Photo01 from "asserts/homeSlider/slider01.jpg";
import Photo02 from "asserts/homeSlider/slider02.jpg";
import Photo03 from "asserts/homeSlider/slider03.jpg";

function Slider() {
  return (
    <div>
      <div className="slideshow">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Photo01} alt="First slide" />
            <Carousel.Caption>
              <h3>Chiến thắng của Việt Nam ở vòng loại World Cup</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Photo02} alt="Second slide" />

            <Carousel.Caption>
              <h3>Chiến thắng của Việt Nam ở vòng loại World Cup</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Photo03} alt="Third slide" />
            <Carousel.Caption>
              <h3>Chiến thắng của Việt Nam ở vòng loại World Cup</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
