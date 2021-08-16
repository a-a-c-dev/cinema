import React from "react";
import leftArrowIcon from "../../assets/img/left-arrow.svg";


export const CarouselLeftArrow = ({ prevMovie }) => {
  return (
    <button className="carousel__arrow carousel arrow--left" onClick={prevMovie}>
      <img src={leftArrowIcon} alt="left-icon"/>
    </button>

  );
};