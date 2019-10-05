import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { merge } from "./merge";
import root from "window-or-global";

const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = createStore(merge, enhancer);
