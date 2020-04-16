import React from "react";

import "./slider.scss";

export default (props) => {
  return (
    <>
      <div className="SliderFrame">
        {props.data.map((item, index) => (
          <div key={index} id={`sliderID${index}`} className="SliderContent">
            {item.message}
          </div>
        ))}
      </div>
      <div>
        {props.data.map((item, index) => (
          <a key={index} href={`#sliderID${index}`}>
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};
