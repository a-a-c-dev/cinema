import React from "react";
import rightArrowIcon from "../../assets/img/right-arrow.svg";


export const CarouselRightArrow = ({ nextMovie }) => {
  return (
    <button  className="carousel__arrow carousel arrow--right"  onClick={nextMovie}>
      <img src={rightArrowIcon} alt="right-icon"/>
    </button>

  );
};
