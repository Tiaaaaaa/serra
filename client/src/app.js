import React, { Component } from "react";
import { StateOfPlant } from "./components/state_of_plant/index";
import { GroundHumidity } from "./components/ground_humidity/index";
import { AirHumidity } from "./components/air_humidity/index";
import { Luminance } from "./components/luminance/index";
import { Temperature } from "./components/temperature/index";
import { Water } from "./components/water/index";
import { WindowsContainer } from "./common/style";
import { Color } from "./common/style";


export const App = () => {
  return (
    <div>
      <Color>
        <StateOfPlant />
        <WindowsContainer>
          <Luminance />
          <Water />
          <AirHumidity />
          <GroundHumidity />
          <Temperature />
        </WindowsContainer>
      </Color>
    </div>
  );
};
