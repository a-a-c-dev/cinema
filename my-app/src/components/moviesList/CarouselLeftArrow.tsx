import React from "react";


export const CarouselLeftArrow = ({ prevMovie }:{prevMovie:(event:React.MouseEvent<HTMLButtonElement>)=>void}) => {
  return (
    <button className="carousel__arrow arrow--left" onClick={prevMovie}>
      <i className="fa fa-angle-left"/> 
    </button>
  );
};