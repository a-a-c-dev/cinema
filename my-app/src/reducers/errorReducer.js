import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.severError,
  action
) {
  if (action.type === types.API_CALL_ERROR) {
    return [...state, action.error];
  }
  if (action.type === types.CLEAN_ERROR) {
    return initialState.severError;
  }

  return state;
}
