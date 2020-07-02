import React from 'react';

const Slide = ({ content, onlyImage, isCustom }) => (
  <div
    className={`slide ${isCustom ? isCustom : ''}`}
    style={{
      backgroundImage: `url(${content})`,
    }}
  >
    {onlyImage || content}
  </div>
);

export default Slide;
