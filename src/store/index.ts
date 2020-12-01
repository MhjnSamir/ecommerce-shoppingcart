import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';


import { rootReducer } from "./rootReducer";

/**
 * using project name as store name
 */
const stateName = require("../../package.json");

/**
 * Redux persist for more control over redux store
 * {@link https://github.com/rt2zz/redux-persist}
 */
const persistConfig ={
    // Encoding the store name
    key: btoa(`${stateName.name}-state`.split("").reverse().join("")),
    // Local Storage as storage engine
    storage: storage,
}

const pReducer = persistReducer(persistConfig, rootReducer)
const middleware = applyMiddleware(thunk);

export const store = createStore(pReducer, composeWithDevTools(middleware));
export const persistor = persistStore(store);