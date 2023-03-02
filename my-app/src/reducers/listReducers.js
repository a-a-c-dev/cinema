import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function listReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    case types.ADD_MOVIE_SUCCESS:
      return [...state, Object.assign({}, action.movie)];
    case types.UPDATE_MOVIES_OPTIMISTIC:      
      return state.map(movie => 
         movie.imdbid === action.savedMovie.savedMovie.imdbid
        ? action.savedMovie.savedMovie
        : movie  
      );
    case types.DELETE_MOVIE_OPTIMISTIC:
      return state.filter(
        movie => 
         movie.imdbid !== action.choosenMovieId.movieId.choosenMovieId
      );
    default:
      return state;
  }
}
