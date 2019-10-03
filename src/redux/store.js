import { createStore, compose } from "redux";
import { merge } from "./merge";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(merge, composeEnhancers());
