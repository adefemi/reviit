import React from "react";

const SVG = ({ color = "#000", size = "100%", className = "", style = {} }) => (
  <svg
    width={size}
    viewBox="0 0 1000 1000"
    className={`svg-icon ${className || ""}`}
    style={style}
  >
    <path
      fill={color}
      d="M838,806.3V990H162V869.9c78.7-32.5,164.5-117,164.5-217.9c0-20.8,0-40-3-59.3H178.2V438.5H297c-7.5-37.2-11.9-78.7-11.9-120.2c0-185.2,134.9-308.3,335-308.3c80,0,140.7,17.7,173.5,35.6l-35.7,170.5c-29.7-16.3-71.2-26.7-125.9-26.7c-105.3,0-137.9,66.7-137.9,139.3c0,38.7,6.1,72.8,14.9,109.9H712v154.1H528.2c1.5,35.6-2.9,71.1-13.4,105.2c-13.3,37.2-37,74.2-72.6,105.2v3H838z"
    />
    <g />
  </svg>
);

export default SVG;
