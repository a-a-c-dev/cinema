import * as modalAction from "./modalActions";
import *  as types from './actionTypes';



describe("open and close  modal", () => {
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
    it('should  assert a close modal ', () => {
        //arrange
        const expectedAction = {
            type: types.HIDE_MODAL
        };
        // act 
        const action = modalAction.hideModal();

        //assert 
        expect(action).toEqual(expectedAction);
    });

});