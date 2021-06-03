/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Dots from "./Dots";

const getWidth = () => window.innerWidth;

/**
 * @function Slider
 */
const Slider = (props) => {
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    let interval = null;

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, [props.autoPlay]);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition, state]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate - activeSlide,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  function changeSlide(index) {
    setState({
      ...state,
      translate: index,
      activeSlide: index + slides.length - slides.length,
    });
    console.log(translate);
  }

  return (
    <div css={SliderCSS} ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      <Dots
        slides={slides}
        activeSlide={activeSlide}
        handleClick={changeSlide}
      />
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 135vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 50px;
`;

export default Slider;
