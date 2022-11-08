import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccessOrOptimistic(type) {
  return type.substring(type.length - 8) === "_SUCCESS"
    ? true
    : type.substring(type.length - 11) === "_OPTIMISTIC"
      ? true
      : false;
}

export default (state = initialState.modal, action) => {
  if (action.type === types.SHOW_MODAL) {
    return {
      ...state,
      modalProps: action.modalProps,
      modalType: action.modalType,
    };
  } else if (
    actionTypeEndsInSuccessOrOptimistic(action.type)
     ||action.type === types.HIDE_MODAL) {
      return initialState;
    }

  return state;
};
