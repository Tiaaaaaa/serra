import React, { Component } from "react";
import { render } from "react-dom";
import { StateOfPlant } from './components/state_of_plant/index';
import { AirHumidity } from './components/air_humidity/index';
import { GroundHumidity } from './components/ground_humidity/index';
import { Temperature } from './components/temperature/index';
import { Water } from './components/water/index';

const App = () => {
  return (
    <div>
      <StateOfPlant />
      <AirHumidity />
      <GroundHumidity />
      <Temperature />
      <Water />
    </div>
  );
};

render(<App />, document.getElementById("serra"));
