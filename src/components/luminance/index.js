import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button } from '../../common/style';

export const Luminance = () => {
  return (
    <Window>
      <WindowTitle>Luminosità</WindowTitle>
      <Button>+</Button>
    </Window>
  );
};
