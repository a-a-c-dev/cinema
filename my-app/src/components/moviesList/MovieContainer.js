import React from 'react';
import defaultPoster from "../../assets/img/unavailable-poster.png";
import { MovieInfo } from './MovieInfo';

export const MovieContainer = ({
  movie,
  activeIndexSlider,
  prevIndexSlider,
  nextIndexSlider,
  movieIndex,
  handleInfo,
  handleDelete
  }) => {
    const {title, year, imdbid, director, runtime, genre, poster} = movie;
    return(
      <div className={
        movieIndex === activeIndexSlider ? 
        "list-group-item carousel__slide carousel__slide--active"
        :  movieIndex === nextIndexSlider?
         "list-group-item carousel__slide carousel__slide--next"
        : movieIndex === prevIndexSlider?
         "list-group-item carousel__slide carousel__slide--prev"
        :"list-group-item carousel__slide"
      }>
        <div className="btn-container"> 
          <button
            className="btn"
            type="button"
            onClick={() => handleInfo(movie)}
          >
            {" "}
            <i className="fa fa-ellipsis-v" />{" "}
          </button>
          <button
          className="btn"
          type="button"
          onClick={() => handleDelete(movie)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        </div>     
        <div className="image-container">
          <img src={poster==="N/A"?defaultPoster:poster} alt="Movie Poster"></img>
        </div>
        <MovieInfo 
          title={title}
          year={year}
          id={imdbid}
          director={director}
          runtime={runtime}
          genre={genre}
          />
      </div>
    )
}