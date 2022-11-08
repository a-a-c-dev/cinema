import * as modalAction from "./modalActions";
import *  as types from './actionTypes';



describe("open  modal", () => {
    it('should  assert a open modal ', () => {
        //arrange
        const modalType = "";
        const modalProps = {};
        const expectedAction = {
            type: types.SHOW_MODAL,
            modalType,
            modalProps
        };
        // act 
        const action = modalAction.showModal({ modalType, modalProps });

        //assert 
        expect(action).toEqual(expectedAction);
    });

});