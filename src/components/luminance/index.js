import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button, Body, Image } from "../../common/style";

export const Luminance = () => {
  return (
    <Window>
      <WindowTitle>Luminosità</WindowTitle>
      <Body>
        <Image>💡</Image>
        <div>10%</div>
      </Body>
      <Button>+</Button>
    </Window>
  );
};
