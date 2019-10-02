import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button, Body, Image } from "../../common/style";

export const Water = () => {
  return (
    <Window>
      <WindowTitle>Acqua</WindowTitle>
      <Body>
        <Image>💧</Image>
        <div>10%</div>
      </Body>
      <Button>+</Button>
    </Window>
  );
};
