import React from 'react';

const SliderContent = ({
  children,
  width,
  translate,
  transition,
  isCustom,
}) => (
  <div
    className={`slider-content ${isCustom ? isCustom : ''}`}
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
