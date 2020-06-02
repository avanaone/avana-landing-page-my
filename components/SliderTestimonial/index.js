import React, { useState, useEffect } from "react";

import Slider from "../Slider";

export default ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const callbackSlider = ({ activeSlide }) => setCurrentSlide(activeSlide);

  const [lang, setLang] = useState("en");

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <>
      <Slider
        slides={testimonials.map((testimonial) => (
          <>
            <q>{lang === 'en' ? testimonial.message.en : testimonial.message.bm}</q>
            <h4>{testimonial.name}</h4>
            <p style={{fontSize: `.875rem`}}>{testimonial.subtext}</p>
          </>
        ))}
        currentSlide={currentSlide}
        callback={callbackSlider}
      />
      <div className="images" style={{display: `flex`, alignItems: `center`}}>
        {testimonials.map((testimonial, idx) => (
          <img
            key={idx}
            alt=""
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
