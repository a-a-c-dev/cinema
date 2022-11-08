import React from 'react';
import { MovieInfo } from './MovieInfo';
import { MovieImageContainer } from '../common/MovieImageContainer';
import {MovieController} from './MovieController';

const MovieContainer = ({
    movie,
    handleEdit,
    handleDelete,
    handleInfo,
    className
    }) => {
      const {title, year, imdbid, director, runtime, genre, poster} = movie;
      return(
        <div className={className}>
          <MovieController 
            movie={movie}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleInfo={handleInfo}
          />
          <MovieImageContainer  poster={poster}/>
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


  
export default MovieContainer