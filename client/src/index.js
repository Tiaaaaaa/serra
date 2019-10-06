import React from 'react'
import { Provider } from "react-redux";
import { hydrate } from "react-dom";
import { App } from "./app";

  hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
