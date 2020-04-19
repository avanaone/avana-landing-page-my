import React from "react";

const Slide = ({ content, onlyImage }) => (
  <div
    className="slide"
    style={{
      backgroundImage: `url(${content})`,
    }}
  >
    {onlyImage || content}
  </div>
);

export default Slide;
