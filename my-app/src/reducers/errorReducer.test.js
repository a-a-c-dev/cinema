import errorReducer from './errorReducer';
import * as actions from '../actions/listActions';


it("shoule add error when passed API_CALL_ERROR", () => {
    let errorsInitialState = ['error1', 'error2'];
    const errors = "error3";

    const action = actions.handleErrorMovie(errors);

    //act

    const newState = errorReducer(errorsInitialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[2]).toEqual("error3");
    expect(errorsInitialState.length).toEqual(2);
    expect(errorsInitialState[0]).toEqual("error1");
});