import express from "express";
import path from "path";
import React from "react";

import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { App } from "./public/app";
import { merge } from "./public/redux/merge";
import devToolsEnhancer from "remote-redux-devtools";
import { html } from "./html";

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  const store = createStore(merge);
  store.dispatch({ type: "CHANGE_TEMPERATURE", payload: 10000 });
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
  const preloadedState = store.getState();
  console.log(preloadedState);
  res.send(html(content, preloadedState));
});

app.listen(3000);
