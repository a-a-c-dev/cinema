import React from "react";


export const CarouselLeftArrow = ({ prevMovie }) => {
  return (
    <button className="carousel__arrow arrow--left" onClick={prevMovie}>
      <i className="fa fa-angle-left"/> 
    </button>
  );
};