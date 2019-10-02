import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button } from '../../common/style';

export const Humidity = () => {
  return (
    <Window>
      <WindowTitle>Umidità</WindowTitle>
      <Button>+</Button>
    </Window>
  );
};
