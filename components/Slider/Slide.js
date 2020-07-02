import React from 'react';

const Slide = ({ content, onlyImage, isCustom, activeSlide, currentSlide }) => (
  <div
    className={`slide ${isCustom ? isCustom : ''} ${
      currentSlide === activeSlide ? 'active' : ''
    }`}
    style={{
      backgroundImage: `url(${content})`,
    }}
  >
    {onlyImage || content}
  </div>
);

export default Slide;
