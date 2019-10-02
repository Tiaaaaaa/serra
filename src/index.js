import React, { Component } from "react";
import { render } from "react-dom";
import { StateOfPlant } from './components/state_of_plant/index';

const App = () => {
  return (
    <div>
      <StateOfPlant />
    </div>
  );
};

render(<App />, document.getElementById("serra"));
