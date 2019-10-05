import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { store } from "../client/src/redux/store";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { App } from "../client/src/index";
import { html } from "../client/src/html";

const app = express();

app.use("/dist", express.static("dist"));
app.get("*", async (req, res) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
  const styles = sheet.getStyleTags();
  res.send(html({ store, content, styles }));
});

app.listen(5000, () => console.log(`Frontend service listening on port: 5000`));
