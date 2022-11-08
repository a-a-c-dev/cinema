import React, {Suspense, lazy} from 'react';
import {Spinner} from '../common/Spinner';

const MovieContainer = lazy(() => import("./MovieContainer"));

const MoviesContainer = (
  ({
    currentMovies,
    activeIndexSlider,
    prevIndexSlider,
    nextIndexSlider,
    handleEdit,
    handleDelete,
    handleInfo
    }) => {
      return(
            <div className="carousel-slider-container">
              {currentMovies.map((movie,index) => {
                  return(
                    <Suspense                    
                      key={movie.imdbid}
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