import { combineReducers } from "redux";
import movies from "./listReducers";
import modal   from "./modalReducer";
import apiCallsInProgress from "./apiStatusReducer";
import severError from "./errorReducer";

const rootReducer = combineReducers({
  movies,
  modal,
  apiCallsInProgress,
  severError
});

export default rootReducer;
