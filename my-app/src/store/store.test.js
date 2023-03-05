import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as listActions from "../actions/listActions";

it("should handle creating movie", function() {
  //arrange
  const store = createStore(rootReducer, initialState);
  const movie = {
    title: "batman",
    year:2004
  };

  // act
  const action = listActions.addMovieSuccess(movie);
  store.dispatch(action);

  //asserts
  const createdMovie = store.getState().movies[0];
  expect(createdMovie).toEqual(movie);
});
