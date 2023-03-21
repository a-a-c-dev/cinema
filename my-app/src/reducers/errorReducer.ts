import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {handleErrorMovieActionType, cleanErrorActionType} from '../actions/listActions';
export default function apiCallStatusReducer(
  state = initialState.severError,
  action:handleErrorMovieActionType|cleanErrorActionType
) {
  if (action.type === types.API_CALL_ERROR) {
    return [...state, action.error];
  }
  if (action.type === types.CLEAN_ERROR) {
    return initialState.severError;
  }

  return state;
}
