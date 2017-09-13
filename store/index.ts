import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { getUserInfo } from '../services/loginService';
const objectAssign = require('object-assign');
/**
 * Creates the store with the specified initialState.
 * @param initialState State of the store on initialization.
 * @return The newly created store.
 */
export function configureStore(initialState = {}) {
    let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let login = fromJS(getUserInfo());
    let store = createStore(
        rootReducer,
        objectAssign(initialState, login ? { login } : {}),
        composeEnhancers(
            applyMiddleware(...getMiddlewares())
        )
    );
    return store;
}
/**
 * Adding middle wares to the store via a method.
 */
function getMiddlewares() {
    let middlewares = [
        thunk,
        promiseMiddleware()
    ];
    return middlewares;
}

export const store = configureStore();
