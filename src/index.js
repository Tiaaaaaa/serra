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

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
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
  const html = `
  <!doctype html>
    <html>
    <head>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="/static/home.js"></script>
  </body>
  </html>`;

  res.send(html);
});

app.listen(3000);
