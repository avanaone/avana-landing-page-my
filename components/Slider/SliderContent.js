import React from 'react';

const SliderContent = ({ children, width, translate, transition }) => (
  <div
    className='slider-content'
    style={{
      width: width,
      transform: `${
        translate > 0
          ? `translateX(-${translate}%)`
          : `translateX(${Math.abs(translate)}%)`
      }`,
      transition: `transform ${transition}s ease-out`,
    }}
  >
    {children}
  </div>
);

export default SliderContent;
