import react from 'react';
import { shallow } from 'enzyme';
import * as listActions from "./listActions";
import *  as types from './actionTypes';
import {initialMovies} from './listActions';
import thunk from 'redux-thunk';
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


  describe('loadMovies', () => {
    afterEach(() => {
      fetchMock.restore();
    });
    it('should  load movies on initial render and begin an api call', async () => {
        const expectedActions = [
          {type: types.BEGIN_API_CALL},
          {movies: [{title: "Gladiator ", year: "2000"}, {title: "Limitless", year: "2011"}, {title: "Batman begins ", year: "2005"}, {title: "The Dark Knight ", year: "2008"}, {title: "Defiance ", year: "2008"}, {title: "The Shawshank Redemption", year: "1994"}, {title: "Forrest Gump", year: "1994"}, {title: "300", year: "2006"}, {title: "Fight Club", year: "1999"}, {title: "The Pursuit Of Happyness", year: "2006"}, {title: "Unbroken", year: "2014"}], type: types.LOAD_MOVIES_SUCCESS}
        ];
      
        const store = mockStore({movies: []});
      
        await store.dispatch(listActions.loadMovies());
        setTimeout(()=>{
            
        },5000)
        
      });
      
    it('should  add moovie and begin an api call', async()=>{
        const expectedActions = [
            {type: types.BEGIN_API_CALL},
            {movie: {title: "Batman 2 ", year: "2000"}, type: types.LOAD_MOVIES_SUCCESS}
          ];
        
          const store = mockStore({movies: [initialMovies]});
        
          await store.dispatch(listActions.addMovieSuccess());
          setTimeout(()=>{
              
          },5000)
    })
  });


describe("Preform list action", () => {
    it('should  assert a update movie action ', () => {
        //arrange
        const savedMovie = { title: 'batman'};
        const expectedAction = {
            type: types.UPDATE_MOVIES_OPTIMISTIC,
            savedMovie
        };
        // act 
        const action = listActions.updateMovie(savedMovie);
        
        //assert 
        expect(action).toEqual(expectedAction);
    });
    it('should  assert a delete movie action ', () => {
        //arrange
        const choosenMovieId=  "tt1809398";
        const expectedAction = {
            type: types.DELETE_MOVIE_OPTIMISTIC,
            choosenMovieId
        };
        // act 
        const action = listActions.deleteMovie(choosenMovieId);
        //assert 
        expect(action).toEqual(expectedAction);
    });
    it('should  assert a load movies success action ', () => {
        //arrange
        const movies = [
            { title: "Gladiator ", year: "2000" },
            { title: "Limitless", year: "2011" },
            { title: "Batman begins ", year: "2005" },
            { title: "The Dark Knight ", year: "2008" }
        ];
        const expectedAction = {
            type: types.LOAD_MOVIES_SUCCESS,
            movies
        };
        // act 
        const action = listActions.loadMoviesSuccess(movies);
        //assert 
        expect(action).toEqual(expectedAction);
    });
    it('should  assert a handle error action ', () => {
        //arrange
        const error = 'error'
        const expectedAction = {
            type: types.API_CALL_ERROR,
            error
        };
        // act 
        const action = listActions.handleErrorMovie(error);
        //assert 
        expect(action).toEqual(expectedAction);
    });
    it('should  assert a clean error action ', () => {
        //arrange
        const expectedAction = {
            type: types.CLEAN_ERROR
        };
        // act 
        const action = listActions.cleanError();
        //assert 
        expect(action).toEqual(expectedAction);
    });

    

})