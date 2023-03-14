import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleware = [logger];
const composedEnhancer = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancer);