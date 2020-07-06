import React, { useState, useEffect } from 'react';

import Slider from '../Slider';

import './slider.scss';

export default ({ testimonials, sliderName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const callbackSlider = ({ activeSlide }) => setCurrentSlide(activeSlide);

  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  return (
    <div className={`slider-main ${sliderName}`}>
      <Slider
        slides={testimonials.map((testimonial, idx) => (
          <>
            {/* <q>{lang === 'en' ? testimonial.message.en : testimonial.message.bm}</q>
            <h4>{testimonial.name}</h4>
            <p style={{fontSize: `.875rem`}}>{testimonial.subtext}</p> */}
            <img
              key={idx}
              alt=''
              srcSet={
                require(`../../public/assets/images/${sliderName}/${
                  lang === 'en' ? testimonial.image.en : testimonial.image.bm
                }?resize&size=800?webp`).srcSet
              }
              className={`${currentSlide === idx ? 'is-active' : ''}`}
            />
          </>
        ))}
        currentSlide={currentSlide}
        callback={callbackSlider}
        hasArrow
        isCustom={sliderName}
      />
      {/* <div className="images" style={{display: `flex`, alignItems: `center`}}>
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
      </div> */}
    </div>
  );
};
