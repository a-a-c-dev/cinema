import React from "react";


export const CarouselRightArrow = ({ nextMovie }) => {
  return (
    <button  className="carousel__arrow carousel arrow--right"  onClick={nextMovie}>
      <i className="fa fa-angle-right"/> 
    </button>

  );
};
