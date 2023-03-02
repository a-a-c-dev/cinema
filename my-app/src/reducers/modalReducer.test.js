import modalReducer from './modalReducer';
import * as actions from '../actions/modalActions';


describe("modal reducer", () => {
     it("Preform hide modal action", () => {
         const initialState = {
             modal: {
                 modalType: "",
                 modalProps: {}
             }
         }
         const expectedState = {
             modal: {
                 modalType: "addMovie",
                 modalProps: {
                     isOpen: true
                 }
             }
         }
        const action = actions.showModal(expectedState.modal);
         //act
         const newState = modalReducer(initialState.modal, action);
         //assert   
         expect(newState).toEqual(expectedState.modal);
     })

    it("Preform hide modal action", () => {
        const initialState = {
            modal: {
                modalType: "",
                modalProps: {}
            }
        }
        let state = {
            modal: {
                modalType: "add",
                modalProps: {
                    isOpen: true
                }
            }
        }
        const action = actions.hideModal();
        //act
        const newState = modalReducer(state.modal, action);
        //assert
        expect(newState.modal).toEqual(initialState.modal);
    })


})