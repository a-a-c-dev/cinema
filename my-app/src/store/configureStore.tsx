import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {InitialStateType} from '../reducers/initialState'

export default function configureStore(initialState:InitialStateType){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}