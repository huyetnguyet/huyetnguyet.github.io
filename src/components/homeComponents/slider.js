import React from "react";
import "./slider.css";
import Photo01 from "../../asserts/homeSlider/slider01.jpg";
import Photo02 from "../../asserts/homeSlider/slider02.jpg";
import Photo03 from "../../asserts/homeSlider/slider03.jpg";
import Photo04 from "../../asserts/homeSlider/slider04.jpg";
import Photo05 from "../../asserts/homeSlider/slider05.jpg";

const photos = [Photo01, Photo02, Photo03, Photo04, Photo05];
const delay = 2500;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {photos.map((backgroundColor, index) => (
            <div className="slide" key={index}>
              <img src={backgroundColor} alt="test" />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshowDotsPosition">
        <div className="slideshowDots">
          {photos.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
