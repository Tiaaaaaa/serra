import React, { Component } from "react";
import { render } from "react-dom";
import { StateOfPlant } from "./components/state_of_plant/index";
import { Humidity } from "./components/humidity/index";
import { Luminance } from "./components/luminance/index";
import { Temperature } from "./components/temperature/index";
import { Water } from "./components/water/index";
import { WindowsContainer } from "./common/style";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div>
      <StateOfPlant />
      <WindowsContainer>
        <Luminance />
        <Humidity />
        <Temperature />
        <Water />
      </WindowsContainer>
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("serra")
);
