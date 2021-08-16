import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function listReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    case types.ADD_MOVIE_SUCCESS:
      return [...state, Object.assign({}, action.movie)];
    case types.UPDATE_MOVIES_OPTIMISTIC:
      state.map(movie =>
        
        console.log("ction.savedMovie.savedMovie",
        movie.imdbid)
        
      );
      
      return state.map(movie =>
        
        movie.imdbid === action.savedMovie.savedMovie.imbdid
          ? action.savedMovie.savedMovie
          : movie
      );
    case types.DELETE_MOVIE_OPTIMISTIC:
      return state.filter(
        movie => movie.imdbID !== action.choosenMovieId.movieId.choosenMovieId
      );

    default:
      return state;
  }
}
