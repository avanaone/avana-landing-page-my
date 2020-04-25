import React from "react";

const Dots = ({ slides, activeSlide, isContrast, eventBanner, handleClick }) => (
  <div className={`dots ${eventBanner ? 'eventBanner' : ''}`}>
    {slides.map((slide, idx) => (
      <span
        key={slide + Math.random(idx)}
        className={`dot ${eventBanner ? 'eventBanner' : ''} ${activeSlide === idx ? "active" : ""} ${
          activeSlide === idx && isContrast ? "active-contrast" : ""
        }`}
        onClick={() => handleClick(idx)}
      />
    ))}
  </div>
);

export default Dots;
