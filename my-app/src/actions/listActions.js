import * as types from "./actionTypes";
import axios from "axios";
import { beginApiCall } from "./apiStatusActions";

export const initialMovies = [
  { title: "Gladiator ", year: "2000" },
  { title: "Limitless", year: "2011" },
  { title: "Batman begins ", year: "2005" },
  { title: "The Dark Knight ", year: "2008" },
  { title: "Defiance ", year: "2008" },
  { title: "The Shawshank Redemption", year: "1994" },
  { title: "Forrest Gump", year: "1994" },
  { title: "300", year: "2006" },
  { title: "Fight Club", year: "1999" },
  { title: "The Pursuit Of Happyness", year: "2006" },
  { title: "Unbroken", year: "2014" }
];
const  url = process.env.REACT_APP_CENIMA_URL;
const apikey = process.env.REACT_APP_CENIMA_API_KEY;

export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}
export function deleteMovie(choosenMovieId) {
  console.log(choosenMovieId);
  return {
    type: types.DELETE_MOVIE_OPTIMISTIC,
    choosenMovieId
  };
}
export function updateMovie(savedMovie) {
  return {
    type: types.UPDATE_MOVIES_OPTIMISTIC,
    savedMovie
  };
}


export function addMovieSuccess(movie) {
  return {
    type: types.ADD_MOVIE_SUCCESS,
    movie
  };
}
export function handleErrorMovie(error) {
  return {
    type: types.API_CALL_ERROR,
    error
  };
}
export function cleanError() {
  return {
    type: types.CLEAN_ERROR
  };
}
export function loadMovies() {
  return function (dispatch) {
    dispatch(beginApiCall());

    let promiseArray = initialMovies.map(movie =>
      axios.get(`${url}${movie.title}&y=${movie.year}${apikey}` )
    );
    const addMoviesRequests = async () => {
      try{
        const res = await axios.all(promiseArray);
        let movies = res.map(movie => movie.data);
        movies.map(movie=>{
          var ar = Object.keys(movie);
          for(var i = 0; i < ar.length; i++){
              var lowerCasePropertyName = ar[i];
              ar[i] = ar[i].toLowerCase();
              movie[ar[i]] = movie[lowerCasePropertyName];
              delete movie[lowerCasePropertyName];
          }
          return movie
        })
        dispatch(loadMoviesSuccess(movies));
      }
      catch(err){
        dispatch(handleErrorMovie(err));
      }
    }
    
    addMoviesRequests();
  };
}
export function addMovie({ movie }) {
  return function (dispatch) {
  dispatch(beginApiCall());
  const {title,year} = movie
  const addMovieRequest = async () => {
    try{
        const res = await axios.get(`${url}${title}&y=${year}${apikey}`);
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
          dispatch(handleErrorMovie(err));
        }
    }
  addMovieRequest();
  };
}


