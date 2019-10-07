import express from "express";
import path from "path";
import React from "react";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { App } from "./public/app";
import { merge } from "./public/redux/merge";
import devToolsEnhancer from "remote-redux-devtools";
import { html } from "./html";


const addWater = () => {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  dispatch => {
    return addWater().then(
      () => dispatch({ type: "ADD_WATER", payload: 10000 })
    );
  };
}

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  const store = createStore(merge, applyMiddleware(thunk));
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
  const preloadedState = store.getState();
  addWater()
  console.log(preloadedState);
  res.send(html(content, preloadedState));
});

app.listen(3000);
