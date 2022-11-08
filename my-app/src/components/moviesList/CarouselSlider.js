import React, {useState, useEffect, useMemo, Suspense, lazy} from "react";
import {CarouselLeftArrow} from "./CarouselLeftArrow";
import {CarouselRightArrow} from "./CarouselRightArrow";
import {Spinner} from '../common/Spinner';


const MoviesContainer = lazy(() => import("./MoviesContainer"));


const CarouselSlider = ({ movies =[], handleEdit,handleInfo, handleDelete }) => {
  const [indexSlider, setIndexSlider] = useState(1);
  const [prevIndexSlider, setPrevIndexSlider] = useState(movies.length-2);
  const [nextIndexSlider, setNextIndexSlider] = useState(2);
  const [activeIndexSlider, setActiveIndexSlider] = useState(1);  

  const prevMovie = useMemo(() => event => {
    event.preventDefault();
    let lastIndex = movies.length-1;
    (indexSlider-1 >= 0)?setIndexSlider(indexSlider-1) :setIndexSlider(lastIndex);
    ( activeIndexSlider-1<0)?setPrevIndexSlider(currentMovies.length-1):setPrevIndexSlider(activeIndexSlider-1);
    ( activeIndexSlider+1>currentMovies.length-1)?setNextIndexSlider(0):setNextIndexSlider(activeIndexSlider+1);
  },[indexSlider]);

  const nextMovie =useMemo(()=> event => {
    event.preventDefault();
    console.log("nextIndexSlider",nextIndexSlider)
    let lastIndex = movies.length-1;
    (indexSlider+1 > lastIndex)? setIndexSlider(0): setIndexSlider(indexSlider+1);
    ( activeIndexSlider-1<0)?setPrevIndexSlider(currentMovies.length-1):setPrevIndexSlider(activeIndexSlider-1);
    ( activeIndexSlider+1>currentMovies.length-1)?setNextIndexSlider(0):setNextIndexSlider(activeIndexSlider+1);
  },[indexSlider]);

const currentMovies = useMemo(()=>movies,[movies]);

const handleMemoEdit = useMemo(()=> handleEdit, [])
const handleMemoInfo = useMemo(()=> handleInfo, [])
const handleMemoDelete = useMemo(()=> handleDelete, [])

useEffect(() => {
  setActiveIndexSlider(indexSlider);
}, [indexSlider]); 

useEffect(() => {
  setActiveIndexSlider(movies.length-1);
}, [movies]); 

useEffect(() => {
  ( activeIndexSlider-1<0)?setPrevIndexSlider(currentMovies.length-1):setPrevIndexSlider(activeIndexSlider-1);
  ( activeIndexSlider+1>currentMovies.length-1)?setNextIndexSlider(0):setNextIndexSlider(activeIndexSlider+1);
}, [activeIndexSlider]); 


  return (
      <div className="carousel-slider" >
        <CarouselRightArrow nextMovie={nextMovie}/>
        <Suspense fallback={<Spinner/>}>
          <MoviesContainer 
              currentMovies={currentMovies}  
              activeIndexSlider={activeIndexSlider}
              prevIndexSlider={prevIndexSlider}
              nextIndexSlider={nextIndexSlider}
              handleEdit={handleMemoEdit}
              handleDelete={handleMemoDelete}
              handleInfo={handleMemoInfo}
          />
        </Suspense>
        <CarouselLeftArrow prevMovie={prevMovie}/> 
    </div>
  );
};

export default CarouselSlider;



