import React from "react";
import Slider from "react-slick";

import "./Slider.css";
export default function SliderWrapper(props) {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="Slider">
      <div className="container">
        <Slider {...settings}>
          {React.Children.map(props.children, child => (
            <div>{child}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
