import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { demoReducer } from '../reducers';
/**
 * Creates the store with the specified initialState.
 * @param initialState State of the store on initialization.
 * @return The newly created store.
 */
export function configureStore(initialState = {}) {
    let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(
        demoReducer,
        composeEnhancers(
            applyMiddleware(...getMiddlewares())
        )
    );
    return store;
}

function getMiddlewares() {
    let middlewares = [
        thunk,
        promiseMiddleware()
    ];
    return middlewares;
}

export const store = configureStore();
