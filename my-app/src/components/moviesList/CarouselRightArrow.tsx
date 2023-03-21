import React from "react";


export const CarouselRightArrow = ({ nextMovie }:{nextMovie:(event:React.MouseEvent<HTMLButtonElement>)=>void}) => {
  return (
    <button  className="carousel__arrow carousel arrow--right"  onClick={nextMovie}>
      <i className="fa fa-angle-right"/> 
    </button>

  );
};
