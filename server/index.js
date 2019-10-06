import express from "express";
import React from "react";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { App } from "../client/src/app";
import { html } from "../client/src/html";
import { merge } from "../client/src/redux/merge";
import devToolsEnhancer from "remote-redux-devtools";

const app = express();

app.use("/dist", express.static("dist"));

app.get("*", async (req, res) => {
  const store = createStore(merge, devToolsEnhancer());
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
  const styles = sheet.getStyleTags();
  const preloadedState = store.getState();
  res.send(html({ preloadedState, content, styles }));
  console.log(store.getState());
});

app.listen(5000, () => console.log(`Frontend service listening on port: 5000`));
