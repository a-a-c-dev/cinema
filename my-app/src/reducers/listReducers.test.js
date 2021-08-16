import listReducer from './listReducers';
import * as actions from '../actions/listActions';


describe("list reducer", () => {


    it("Should load array of movies", () => {
        let listInitialState = [];
        const moviesPassed = [{ title: "batman", id: 1 }, { title: "limitless", id: 2 }, { title: "batman2", id: 3 }];
        const action = actions.loadMoviesSuccess(moviesPassed);

        //act
        const newState = listReducer(listInitialState, action);
        expect(listInitialState.length).toEqual(0);
        expect(newState.length).toEqual(3);
    });
    it("Should add movie object to the array of movies", () => {
        let listInitialState = [{ title: "batman", id: 1 }, { title: "limitless", id: 2 }];
        const moviePassed = { title: "batman2", id: 3 };
        const action = actions.addMovieSuccess(moviePassed);

        //act
        const newState = listReducer(listInitialState, action);

        //assert
        expect(listInitialState.length).toEqual(2);
        expect(newState.length).toEqual(3);
        expect(newState[2].title).toEqual("batman2");
    });


    /*it("Should update selected movie", () => {
        let listInitialState = [{ title: "batman", imdbID: 1 }, { title: "limitless", imdbID: 2 }];
        const moviePassed = { title: "batman2", imdbID: 1 };
        const action = actions.updateMovie(moviePassed);

        //act
        const newState = listReducer(listInitialState, action);

        const updateMovie = newState.find(a => a.imdbID == action.moviePassed.imdbID)
        const untouchedMovie = newState.find(a => a.imdbID == 2)

        //assert
        expect(updateMovie.title).toEqual("batman2");
        expect(untouchedMovie.title).toEqual("limitless");
        expect(newState.length).toEqual(2);
    });
   
    it("Should delete one item from the list", () => {
        let listInitialState = [{ title: "batman", imdbID: 1 }, { title: "limitless", imdbID: 2 }];
        const moviePassed = { title: "limitless", choosenMovieID: 2 };
        const action = actions.deleteMovie(moviePassed.choosenMovieID);

        //act
        const newState = listReducer(listInitialState, action);

        //assert
        expect(listInitialState.length).toEqual(2);
        expect(newState.length).toEqual(1);
    });
 */

})

