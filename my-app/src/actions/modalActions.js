import * as types from "./actionTypes";

export const showModal = ({ modalType, modalProps }) => {
  return {
    type: types.SHOW_MODAL,
    modalType,
    modalProps
  };
};

export const hideModal = () => {
  return {
    type: types.HIDE_MODAL
  };
};
