import React from 'react';

const Arrow = ({ direction, isContrast, hasOverlay, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`arrow ${direction} ${hasOverlay ? 'hasOverlay' : ''}`}
    >
      {direction === 'left' ? (
        <img
          src="assets/images/back.svg"
          alt=""
          className={isContrast ? 'contrast' : ''}
        />
      ) : (
        <img
          src="assets/images/next.svg"
          alt=""
          className={isContrast ? 'contrast' : ''}
        />
      )}
    </div>
  );
};

export default Arrow;
