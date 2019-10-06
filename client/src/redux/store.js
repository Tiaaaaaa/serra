import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { merge } from "./merge";
import { Provider } from "react-redux";
import root from "window-or-global";
import devToolsEnhancer from "remote-redux-devtools";
import { hydrate } from "react-dom";

const preloadedState = root.__PRELOADED_STATE__;
delete root.__PRELOADED_STATE__;

export const store = createStore(merge, preloadedState, devToolsEnhancer());
