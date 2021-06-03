/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Dot = ({ active, onClick }) => (
  <div
    onClick={onClick}
    css={css`
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? "#4390C7" : "#61A64E"};
    `}
  />
);

const Dots = ({ slides, activeSlide, handleClick }) => (
  <div
    css={css`
      position: absolute;
      bottom: 50%;
      width: auto;
      top: 50%;
      right: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  >
    {slides.map((slide, i) => (
      <Dot
        key={slide}
        active={activeSlide === i}
        onClick={e =>  handleClick(i)}
      />
    ))
    }
  </div>
);

export default Dots;
