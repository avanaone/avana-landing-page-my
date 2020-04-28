import React from 'react';

const Dots = ({ slides, activeSlide, isContrast, handleClick }) => (
  <div className="dots">
    {slides.map((slide, idx) => (
      <span
        key={slide + Math.random(idx)}
        className={`dot ${activeSlide === idx ? 'active' : ''} ${
          activeSlide === idx && isContrast ? 'active-contrast' : ''
        }`}
        onClick={() => handleClick(idx)}
      />
    ))}
  </div>
);

export default Dots;
