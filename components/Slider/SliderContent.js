import React from "react";

const SliderContent = ({ children, width, translate, transition }) => (
  <div
    className="slider-content"
    style={{
      width: width,
      transform: `translateX(-${translate}%)`,
      transition: `transform ${transition}s ease-out`,
    }}
  >
    {children}
  </div>
);

export default SliderContent;
