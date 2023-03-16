import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import {persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}
const middleware = [logger, thunk, sagaMiddleware];
const composedEnhancer = compose(applyMiddleware(...middleware));
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)