import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadMovies } from "./actions/listActions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import rootReducer from './reducers/index';
import initialState from "./reducers/initialState";

import LocalStorageManager from "./utils/LocalStorageManager";

const storageMovies = (LocalStorageManager.get('movies') || [])

const store = configureStore(initialState);
  if (!(storageMovies.length>0)){
    store.dispatch(loadMovies() as any );
   }

 

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={4000} hideProgressBar />
  </Provider>,
  document.getElementById("root")
);
