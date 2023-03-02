import * as apiStatusActions from "./apiStatusActions";
import *  as types from './actionTypes';



describe("api action", () => {
   
    it('should  assert a close modal ', () => {
        //arrange
        const expectedAction = {
            type: types.BEGIN_API_CALL
        };
        // act 
        const action = apiStatusActions.beginApiCall();

        //assert 
        expect(action).toEqual(expectedAction);
    });

});