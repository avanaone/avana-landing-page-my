import React, { useState, useEffect } from "react";

import "./slider.scss";

export default (props) => {
  const [SlideItem, setSlideItem] = useState(0);

  useEffect(() => {
    SlideItem < props.testimonial.length &&
      setTimeout(() => {
        setSlideItem(
          SlideItem == props.testimonial.length - 1 ? 0 : SlideItem + 1
        );
      }, 5000);
  }, [SlideItem]);

  return (
    <div className="SLiderContainer">
      <div className="SliderFrame">
        {props.testimonial.map((item, index) => (
          <div
            key={index}
            id={`Message${index}`}
            className={
              SlideItem == index ? "SliderContentActive" : "SliderContentHidden"
            }
          >
            <p>{item.message}</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      <div className="ImgFrame">
        {props.testimonial.map((item, index) => (
          <img
            src={require(`../../public/assets/images/testimonial/${item.image}`)}
            alt=""
            key={index}
            className={SlideItem == index ? "img-active" : "img"}
            onClick={() => {
              setSlideItem(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
