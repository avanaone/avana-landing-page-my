import React, { useState, useEffect, useRef } from "react";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import Description from "./Description";

import "./Slider.scss";

const Slider = (props) => {
  const {
    id,
    slides,
    currentSlide,
    width = "100%",
    transition = ".3",
    onlyImage,
    hasArrow,
    hasDots,
    autoPlay = false,
    callback,
    eventBanner
  } = props;

  const [state, setState] = useState({
    activeSlide: currentSlide,
    translate: 0,
    isContrast: true,
  });

  const { activeSlide, translate, isContrast } = state;

  const events = [{title: 'Free Shipping and Admin Fee'}, {title: 'Free Voucher Rp 100.000'}];

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
      translate: idx * 100,
      activeSlide: idx,
    });

    if (callback) {
      return {
        id,
        activeSlide: idx,
      };
    }
  };

  const nextSlide = (activeSlide) => {
    setState({
      ...state,
      translate:
        translate >= (slides.length - 100 / width.match(/\d+/)[0]) * 100
          ? 0
          : translate + 100,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

    if (callback) {
      return {
        id,
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      };
    }
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
        {slides.map((_slide, idx) => (
          <Slide
            key={slides + Math.random(idx)}
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

      {eventBanner && (
      <div className="slider">
        <SliderContent
          width={width}
          translate={translate}
          transition={transition}
        >
          {events.map((_slide, idx) => (
            <Description eventName={_slide.title}/>
          ))}
        </SliderContent>
      </div>
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
