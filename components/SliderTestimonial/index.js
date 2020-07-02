import React, { useState, useEffect } from 'react';

import Slider from '../Slider';

export default ({ testimonials }) => {
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
    <div style={{ margin: `2rem 0` }}>
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
                require(`../../public/assets/images/testimonial/${
                  lang === 'en' ? testimonial.image.en : testimonial.image.bm
                }?resize&size=800?webp`).srcSet
              }
              className={`${currentSlide === idx ? 'is-active' : ''}`}
              style={{ maxWidth: `800px`, margin: `auto` }}
            />
          </>
        ))}
        currentSlide={currentSlide}
        callback={callbackSlider}
        hasDots
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
