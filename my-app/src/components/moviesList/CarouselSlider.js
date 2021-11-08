import React, {useState, useEffect} from "react";
import {MovieContainer} from "./MovieContainer"
import {CarouselLeftArrow} from "./CarouselLeftArrow";
import {CarouselRightArrow} from "./CarouselRightArrow";

const CarouselSlider = ({ movies =[], handleEdit,handleInfo, handleDelete }) => {
  const [indexSlider, setIndexSlider] = useState(1);
  const [activeIndexSlider, setActiveIndexSlider] = useState(1);
  const prevMovie = event => {
    event.preventDefault();
    let lastIndex = movies.length-1;
      console.log('prev',indexSlider-1 , 'index',indexSlider);
      (indexSlider-1 >= 0)?setIndexSlider(indexSlider-1) :setIndexSlider(lastIndex);
  }
  const nextMovie = event => {
    event.preventDefault();
    let lastIndex = movies.length-1;
    (indexSlider+1 > lastIndex)? setIndexSlider(0): setIndexSlider(indexSlider+1);
  }
  const activeSlider = _ =>{
    setActiveIndexSlider(indexSlider);
  }

useEffect(() => {
  activeSlider(indexSlider);
}, [indexSlider]); 




  return (
      <div className="carousel-slider" >
        <CarouselRightArrow nextMovie={nextMovie}/>
        <div className="carousel-slider-container">
          {movies.map((movie,index) => {
              return(
                <MovieContainer 
                  key={movie.imdbid}
                  movie={movie}
                  movieIndex={index}
                  activeIndexSlider={activeIndexSlider}
                  prevIndexSlider={activeIndexSlider-1<0?movies.length-1:activeIndexSlider-1}
                  nextIndexSlider={activeIndexSlider+1>movies.length-1?0:activeIndexSlider+1}
                  handleEdit={handleEdit}
                  handleInfo={handleInfo}
                  handleDelete={handleDelete}/>
              ) 
          })}
        </div>
        <CarouselLeftArrow prevMovie={prevMovie}/> 
    </div>
  );
};

export default CarouselSlider;



