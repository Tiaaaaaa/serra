import React, { Component } from "react";
import { render } from "react-dom";
import { StateOfPlant } from './components/state_of_plant/index';
import { Humidity } from './components/humidity/index';
import { Luminance } from './components/luminance/index';
import { Temperature } from './components/temperature/index';
import { Water } from './components/water/index';
import { WindowsContainer } from './common/style'

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

render(<App />, document.getElementById("serra"));
