import React, {Suspense, lazy } from 'react';
import {Spinner} from '../common/Spinner';
import {Movie} from '../../App'

const MovieContainer = lazy(() => import("./MovieContainer"));

interface MoviesContainerProps{
  currentMovies:Movie[],
  activeIndexSlider:number,
  prevIndexSlider:number,
  nextIndexSlider:number,
  handleEdit:(movie:Movie)=>void,
  handleDelete:(movie:Movie)=>void,
  handleInfo:(movie:Movie)=>void

}





const MoviesContainer = (
  ({
    currentMovies,
    activeIndexSlider,
    prevIndexSlider,
    nextIndexSlider,
    handleEdit,
    handleDelete,
    handleInfo
    }:MoviesContainerProps) => {
      return(
            <div className="carousel-slider-container">
              {currentMovies.map((movie,index) => {
                  return(
                    <Suspense                    
                      key={`${index}--${movie.imdbid}`}
                      fallback={<Spinner />}>
                      <MovieContainer 
                          movie={movie}
                          handleEdit={handleEdit}
                          handleInfo={handleInfo}
                          handleDelete={handleDelete}
                          className={
                            index === activeIndexSlider ? 
                            "carousel__slide carousel__slide--active"
                            :  index === nextIndexSlider?
                            "carousel__slide carousel__slide--next"
                            : index === prevIndexSlider?
                            "carousel__slide carousel__slide--prev"
                            :"carousel__slide"
                          }
                      />
                    </Suspense>
                  ) 
                })}
            </div>

      )
  }
)



export default MoviesContainer