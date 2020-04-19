import React, { useState, useEffect, useRef } from "react";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

import "./Slider.scss";

const Slider = (props) => {
  const {
    id,
    slides,
    currentSlide,
    width = "100%",
    transition,
    onlyImage,
    hasArrow,
    hasDots,
    autoPlay,
    callback,
  } = props;

  const [state, setState] = useState({
    _slides: slides,
    activeSlide: currentSlide,
    translate: 0,
    isContrast: true,
    slidesContrast: Array(slides.length).fill(null),
  });

  const { _slides, activeSlide, translate, isContrast, slidesContrast } = state;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;

    // if (activeSlide !== currentSlide) {
    jumpSlide(currentSlide);
    // }
  }, [id, activeSlide, currentSlide]);

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        autoPlayRef.current();
      }, 5000);
    }

    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [id, slides, activeSlide, slidesContrast, onlyImage, autoPlay, callback]);

  const jumpSlide = (idx) => {
    callback({
      id,
      activeSlide: idx,
    });

    return setState({
      ...state,
      translate: idx * 100,
      activeSlide: idx,
    });
  };

  const nextSlide = () => {
    callback({
      id,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

    return setState({
      ...state,
      translate:
        translate >= (slides.length - 100 / width.match(/\d+/)[0]) * 100
          ? 0
          : translate + 100,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () =>
    setState({
      ...state,
      translate:
        translate <= 0
          ? Math.ceil(slides.length - 100 / width.match(/\d+/)[0]) * 100
          : translate - 100,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <div className="slider" autoPlay>
      <SliderContent
        width={width}
        translate={translate}
        transition={transition}
      >
        {_slides.map((_slide, idx) => (
          <Slide
            key={_slides + Math.random(idx)}
            content={_slide}
            onlyImage={onlyImage}
          />
        ))}
      </SliderContent>

      {hasArrow && (
        <>
          <Arrow
            direction="left"
            handleClick={prevSlide}
            isContrast={isContrast}
          />
          <Arrow
            direction="right"
            handleClick={nextSlide}
            isContrast={isContrast}
          />
        </>
      )}

      {hasDots && (
        <Dots
          slides={slides}
          activeSlide={activeSlide}
          handleClick={jumpSlide}
          isContrast={isContrast}
        />
      )}
    </div>
  );
};

export default Slider;
