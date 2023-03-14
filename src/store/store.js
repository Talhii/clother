import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import {persistStore, persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}
const middleware = [logger];
const composedEnhancer = compose(applyMiddleware(...middleware));
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store)