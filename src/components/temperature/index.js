import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Body, Image } from "../../common/style";

export const Temperature = () => {
  return (
    <Window>
      <WindowTitle>Temperatura</WindowTitle>
      <Body>
        <Image>🌡️</Image>
        <div>10%</div>
      </Body>
    </Window>
  );
};
