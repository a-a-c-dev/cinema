import React from 'react';
import { MovieInfo } from './MovieInfo';
import { MovieImageContainer } from '../common/MovieImageContainer';
import {MovieController} from './MovieController';
import {Movie} from '../../App'

interface MovieContainerProps{
  movie :Movie, 
  handleEdit:(movie:Movie)=>void,
  handleInfo:(movie:Movie)=>void, 
  handleDelete:(movie:Movie)=>void,
  className:string
}



const MovieContainer = ({
    movie,
    handleEdit,
    handleDelete,
    handleInfo,
    className
    }:MovieContainerProps) => {
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