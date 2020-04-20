import React, { useState } from "react";

import Slider from "../Slider";

export default ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const callbackSlider = ({ activeSlide }) => setCurrentSlide(activeSlide);

  return (
    <>
      <Slider
        slides={testimonials.map((testimonial) => (
          <>
            <q>{testimonial.message}</q>
            <h4>{testimonial.name}</h4>
          </>
        ))}
        currentSlide={currentSlide}
        callback={callbackSlider}
      />
      <div className="images">
        {testimonials.map((testimonial, idx) => (
          <img
            key={idx}
            srcSet={
              require(`../../public/assets/images/testimonial/${testimonial.image}?resize&size=50?webp`)
                .srcSet
            }
            className={`${currentSlide === idx ? "is-active" : ""}`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          />
        ))}
      </div>
    </>
  );
};
