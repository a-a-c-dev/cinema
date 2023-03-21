import * as types from "./actionTypes";




export interface showModalType{
  type:  types.SHOW_MODAL_TYPE;
  modalType:string|null;
  modalProps:any
} 


export const showModal = ({ modalType, modalProps }:showModalType) => {
  return {
    type: types.SHOW_MODAL,
    modalType,
    modalProps
  };
};




export interface hideModalType{
  type:  types.HIDE_MODAL_TYPE;
} 

export const hideModal = ():hideModalType => {
  return {
    type: types.HIDE_MODAL
  };
};
