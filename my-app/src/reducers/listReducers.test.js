import listReducer from './listReducers';
import * as actions from '../actions/listActions';
import initialState from './initialState';


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
    it("Should update selected movie", () => {
        let listInitialState = [{ title: "batman", imdbid: 1 }, { title: "limitless", imdbid: 2 }];
        const moviePassed = {savedMovie : {title: "batman2", imdbid: 1}  };
        const action = actions.updateMovie(moviePassed);
      
        //act
        const newState = listReducer(listInitialState, action);
         
        //assert
        expect(newState[0].title).toEqual("batman2");
        expect(newState[1].title).toEqual("limitless");
      });
    it("Should delete one item from the list", () => {
    let listInitialState = [    { imdbid: "tt0111161", title: "The Shawshank Redemption" },    { imdbid: "tt0068646", title: "The Godfather" },    { imdbid: "tt0468569", title: "The Dark Knight" },  ];
    
    const choosenMovieId = { movieId: { choosenMovieId: "tt0068646" } };
    const action = actions.deleteMovie(choosenMovieId);
    
    //act
    const newState = listReducer(listInitialState, action);
    
    //assert
    expect(newState.length).toEqual(2);
    expect(newState).not.toContainEqual({
        imdbid: "tt0068646",
        title: "The Godfather",
    });
    expect(newState).toEqual([
        { title: "The Shawshank Redemption", imdbid: "tt0111161" },
        { title: "The Dark Knight", imdbid: "tt0468569" }
        ]);
    });
})

