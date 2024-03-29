import * as types from "./actionTypes";
import axios from "axios";
import { beginApiCall } from "./apiStatusActions";
import { Action,AnyAction } from 'redux';
import {Movie} from '../App'
import {ThunkAction,ThunkDispatch  }from 'redux-thunk'
import {InitialStateType} from '../reducers/initialState'



export interface loadMoviesSuccessAction {
  type: types.LOAD_MOVIES_SUCCESS_TYPE;
  movies: Movie[];
}

export function loadMoviesSuccess(movies:Movie[]):loadMoviesSuccessAction {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export interface DeleteMovieAction  {
  type:  types.DELETE_MOVIE_OPTIMISTIC_TYPE;
  choosenMovieId: {
    movieId: {
      choosenMovieId:string;
    }
  };
}

export function deleteMovie(choosenMovieId:string):DeleteMovieAction {
  return {
    type: types.DELETE_MOVIE_OPTIMISTIC,
    choosenMovieId:{
      movieId:{
        choosenMovieId
      }
    }
  };
}


export interface updateMovieAction {
  type: types.UPDATE_MOVIES_OPTIMISTIC_TYPE;
  savedMovie:{savedMovie:Movie};
}

export function updateMovie(savedMovie: Movie): updateMovieAction {
  return {
    type: types.UPDATE_MOVIES_OPTIMISTIC,
    savedMovie: {
      savedMovie
    }
  };
}



export interface addMovieSuccessAction {
  type: types.ADD_MOVIE_SUCCESS_TYPE;
  movie: Movie;
}


export function addMovieSuccess(movie:Movie):addMovieSuccessAction {
  return {
    type: types.ADD_MOVIE_SUCCESS,
    movie
  };
}


export interface handleErrorMovieActionType  {
  type:  types.API_CALL_ERROR_TYPE;
  error: string;
}

export function handleErrorMovie(error:string):handleErrorMovieActionType {
  return {
    type: types.API_CALL_ERROR,
    error
  };
}


export interface cleanErrorActionType  {
  type:  types.CLEAN_ERROR_TYPE;
}


export function cleanError():cleanErrorActionType {
  return {
    type: types.CLEAN_ERROR
  };
}

export function loadMovies(){
  return function (dispatch:ThunkDispatch<InitialStateType, any, AnyAction>) {
    dispatch(beginApiCall());
   
    const addMoviesRequests = async () => {
      try{
        const res = await axios.get('/getMovies');
        const movies = await res.data
       dispatch(loadMoviesSuccess(movies));
      }
      catch(err){
        let error:any= err;
        dispatch(handleErrorMovie(error));
      }
    }
    addMoviesRequests();
  };
}
export function addMovie({ movie }:{movie:Movie}) {
  return function (dispatch:ThunkDispatch<any, any, AnyAction>) {
  dispatch(beginApiCall());
  const {title,year} = movie;
  const addMovieRequest = async () => {
    try{
        const res = await axios.get(`/getMovie?t=${title}&y=${year}`);
        
        
        let movie = res.data;
        let ar = Object.keys(movie);
        for(var i = 0; i < ar.length; i++){
            var lowerCasePropertyName = ar[i];
            ar[i] = ar[i].toLowerCase();
            movie[ar[i]] = movie[lowerCasePropertyName];
            delete movie[lowerCasePropertyName];
        }
          return (movie.response === "False")
          ?dispatch(handleErrorMovie(movie.error))   
          :dispatch(addMovieSuccess(movie));
      } 
        catch(err) {
          let error:any= err

          dispatch(handleErrorMovie(error));
        }
    }
  addMovieRequest();
  };
}


