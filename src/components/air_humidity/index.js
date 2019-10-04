import React, { Component } from "react";
import { render } from "react-dom";
import {
  Window,
  WindowTitle,
  Body,
  Image,
  EmptyButton,
  TextContainer,
  Data
} from "../../common/style";

export const AirHumidity = () => {
  return (
    <Window>
      <WindowTitle>Umidità dell'aria</WindowTitle>
      <Body>
        <Image>🌫️</Image>
        <TextContainer>
          <Data>10%</Data>
        </TextContainer>
      </Body>
      <EmptyButton />
    </Window>
  );
};
