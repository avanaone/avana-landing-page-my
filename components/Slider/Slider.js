import React, { useState, useEffect } from "react";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = (props) => {
  const {
    id,
    slides,
    currentSlide = 0,
    width = "100%",
    transition = ".3",
    onlyImage,
    hasArrow,
    hasDots,
    isCustom,
    autoPlay = false,
    callback,
    eventBanner,
  } = props;

  const [state, setState] = useState({
    activeSlide: currentSlide,
    translate: isCustom === "milestone" ? -25 : 0,
    isContrast: true,
    hasOverlay: true,
  });

  const { activeSlide, translate, isContrast, hasOverlay } = state;

  // const autoPlayRef = useRef();

  useEffect(() => {
    // autoPlayRef.current = nextSlide;
    let interval;

    if (callback) {
      callback(jumpSlide(currentSlide));
    }

    if (autoPlay) {
      interval = setInterval(() => {
        if (callback) {
          callback(nextSlide(currentSlide));
        } else {
          nextSlide();
        }
      }, 5000);
    }

    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [currentSlide]);

  // useEffect(() => {
  // let interval;
  // if (autoPlay) {
  //   interval = setInterval(() => {
  //     autoPlayRef.current();
  //   }, 5000);
  // }
  // return () => {
  //   if (autoPlay) {
  //     clearInterval(interval);
  //   }
  // };
  // }, [
  //   id,
  //   slides,
  //   activeSlide,
  //   currentSlide,
  //   slidesContrast,
  //   onlyImage,
  //   autoPlay,
  //   callback,
  // ]);

  const jumpSlide = (idx) => {
    setState({
      ...state,
      translate:
        isCustom === "milestone"
          ? idx * 50 - 25
          : isCustom === "testimonial"
          ? idx * 50 - 50
          : idx * 100,
      activeSlide: idx,
    });

    if (callback) {
      return {
        id,
        activeSlide: idx,
      };
    }
  };

  const nextSlide = (currentSlide) => {
    let _activeSlide =
      typeof currentSlide === "number" ? currentSlide : activeSlide;

    setState({
      ...state,
      // translate:
      //   translate >=
      //   (slides.length - 100 / width.match(/\d+/)[0]) *
      //     (isCustom === 'milestone' ? 50 : 100)
      //     ? 0
      //     : translate + (isCustom === 'milestone' ? 50 : 100),
      translate:
        slides.length === _activeSlide + 1
          ? isCustom === "milestone"
            ? -25
            : isCustom === "testimonial"
            ? -50
            : 0
          : translate + (isCustom === "milestone" ? 50 : 100),
      activeSlide: _activeSlide === slides.length - 1 ? 0 : _activeSlide + 1,
    });

    if (callback) {
      return {
        id,
        activeSlide: _activeSlide === slides.length - 1 ? 0 : _activeSlide + 1,
      };
    }
  };

  const prevSlide = () =>
    setState({
      ...state,
      // translate:
      //   translate <= 0
      //     ? Math.ceil(slides.length - 100 / width.match(/\d+/)[0]) *
      //       (isCustom === 'milestone' ? 50 : 100)
      //     : translate - (isCustom === 'milestone' ? 50 : 100),
      translate:
        activeSlide === 0
          ? (isCustom === "milestone"
              ? -25
              : isCustom === "testimonial"
              ? -50
              : 0) +
            (slides.length - 1) * (isCustom === "milestone" ? 50 : 100)
          : translate - (isCustom === "milestone" ? 50 : 100),
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <div className="slider" autoPlay>
      <SliderContent
        width={width}
        translate={translate}
        transition={transition}
        isCustom={isCustom}
      >
        {slides.map((_slide, idx) => (
          <Slide
            key={slides + Math.random(idx)}
            content={_slide}
            onlyImage={onlyImage}
            isCustom={isCustom}
            currentSlide={idx}
            activeSlide={activeSlide}
          />
        ))}
      </SliderContent>

      {hasArrow && (
        <>
          <Arrow
            direction="left"
            handleClick={prevSlide}
            isContrast={isContrast}
            hasOverlay={hasOverlay}
          />
          <Arrow
            direction="right"
            handleClick={nextSlide}
            isContrast={isContrast}
            hasOverlay={hasOverlay}
          />
        </>
      )}

      {hasDots && (
        <Dots
          slides={slides}
          activeSlide={activeSlide}
          handleClick={jumpSlide}
          isContrast={isContrast}
          eventBanner={eventBanner}
        />
      )}
    </div>
  );
};

export default Slider;
