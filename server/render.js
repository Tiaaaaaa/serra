import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { App } from "../client/src/index";

export default store => {
  const content = renderToString(
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  );

  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
      
      <div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>
      <script src="dist/bundle.js"></script>
      </body>
      </html>
  `;
};
