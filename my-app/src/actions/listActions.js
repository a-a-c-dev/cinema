import * as types from "./actionTypes";
import axios from "axios";
import { beginApiCall } from "./apiStatusActions";

export const initialMovies = [
  { title: "Gladiator ", year: "2000" },
  { title: "Unbroken", year: "2014" },
  { title: "The Dark Knight ", year: "2008" },
  { title: "The Godfather", year: "1972" },
  { title: "The Shawshank Redemption", year: "1994" },
  { title: "The Pursuit Of Happyness", year: "2006" },
  { title: "Fight Club", year: "1999" },
  { title: "Defiance ", year: "2008" },
  { title: "Forrest Gump", year: "1994" },
  { title: "Batman begins ", year: "2005" },
  { title: "300", year: "2006" }
];

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
  console.log("at handleErrorMovie", error)
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
    const apikey = process.env.REACT_APP_CENIMA_API_KEY;
    const url = "https://www.omdbapi.com/?t=";
    let promiseArray = initialMovies.map(movie =>
      axios.get(
          `${url}${movie.title}&y=${movie.year}${apikey}` 
      )
    );
    axios
      .all(promiseArray)
      .then(function (res) {
        let movies = res.map(movie => movie.data);
        movies = JSON.stringify(movies);
        movies = JSON.parse(movies);
        movies.map(movie=>{
          var ar = Object.keys(movie);
          for(var i = 0; i < ar.length; i++){
              var lowerCasePropertyName = ar[i];
              ar[i] = ar[i].toLowerCase();
              movie[ar[i]] = movie[lowerCasePropertyName];
              delete movie[lowerCasePropertyName];
          }
        })
     
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        dispatch(handleErrorMovie(error));
        throw error;
      });
  };
}
export function addMovie({ movie }) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const apikey = process.env.REACT_APP_CENIMA_API_KEY;
    const url = "https://www.omdbapi.com/?t=";
    return axios
      .get(
        `${url}${movie.title}&y=${movie.year}${apikey}` 
      )
      .then(res => {
        const movie = res.data;
        var ar = Object.keys(movie);
        for(var i = 0; i < ar.length; i++){
            var lowerCasePropertyName = ar[i];
            ar[i] = ar[i].toLowerCase();
            movie[ar[i]] = movie[lowerCasePropertyName];
            delete movie[lowerCasePropertyName];
        }
        movie.response === "False"
          ? dispatch(handleErrorMovie(movie.error))
          : dispatch(addMovieSuccess(movie));
        console.log(movie)
        
      })
      .catch(err => {
        console.error(err);
        dispatch(handleErrorMovie(err.Error));
       // throw error.Error;
      });
  };
}
