import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button } from '../../common/style';

export const Temperature = () => {
  return (
    <Window>
      <WindowTitle>Temperatura</WindowTitle>
      <Button>+</Button>
    </Window>
  );
};
