import React from 'react';
import defaultPoster from "../../assets/img/unavailable-poster.png";
import { MovieInfo } from './MovieInfo';

export const MovieContainer = ({
  movie,
  activeIndexSlider,
  prevIndexSlider,
  nextIndexSlider,
  movieIndex,
  handleEdit,
  handleDelete,
  handleInfo
  }) => {
    const {title, year, imdbid, director, runtime, genre, poster} = movie;
    return(
      <div className={
        movieIndex === activeIndexSlider ? 
        "carousel__slide carousel__slide--active"
        :  movieIndex === nextIndexSlider?
         "carousel__slide carousel__slide--next"
        : movieIndex === prevIndexSlider?
         "carousel__slide carousel__slide--prev"
        :"carousel__slide"
      }>
        <div className="btn-container"> 
          <button
            className="btn"
            type="button"
            onClick={() => handleEdit(movie)}
          >
            {" "}
            <i className="fa fa-ellipsis-v" />{" "}
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => handleInfo(movie)}
          >
            {" "}
            <i className=" fa fas fa-eye"></i>{" "}
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
          <img src={poster==="N/A"?defaultPoster:poster} alt="Movie Poster"/>
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