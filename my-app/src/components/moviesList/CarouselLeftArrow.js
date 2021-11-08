import React from "react";


export const CarouselLeftArrow = ({ prevMovie }) => {
  return (
    <button className="carousel__arrow" onClick={prevMovie}>
      <i className="fa fa-angle-left"/> 
    </button>
  );
};