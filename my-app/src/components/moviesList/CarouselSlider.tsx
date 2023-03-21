import React, {useState, useEffect, useMemo, Suspense, lazy} from "react";
import {CarouselLeftArrow} from "./CarouselLeftArrow";
import {CarouselRightArrow} from "./CarouselRightArrow";
import {Spinner} from '../common/Spinner';
import {Movie} from '../../App'


const MoviesContainer = lazy(() => import("./MoviesContainer"));

interface CarouselSliderProps{
  movies :Movie[],
  handleEdit:(movie:Movie)=>void,
  handleInfo:(movie:Movie)=>void,
  handleDelete:(movie:Movie)=>void
}

const CarouselSlider = ({ movies =[], handleEdit,handleInfo, handleDelete }:CarouselSliderProps) => {
  const [indexSlider, setIndexSlider] = useState<number>(1);
  const [prevIndexSlider, setPrevIndexSlider] = useState<number>(movies.length-2);
  const [nextIndexSlider, setNextIndexSlider] = useState<number>(2);
  const [activeIndexSlider, setActiveIndexSlider] = useState<number>(1);  

  const prevMovie = useMemo(() => (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let lastIndex = movies.length-1;
    (indexSlider-1 >= 0)?setIndexSlider(indexSlider-1) :setIndexSlider(lastIndex);
    ( activeIndexSlider-1<0)?setPrevIndexSlider(currentMovies.length-1):setPrevIndexSlider(activeIndexSlider-1);
    ( activeIndexSlider+1>currentMovies.length-1)?setNextIndexSlider(0):setNextIndexSlider(activeIndexSlider+1);
  },[indexSlider]);

  const nextMovie =useMemo(()=> (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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



