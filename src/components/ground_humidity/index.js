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

export const GroundHumidity = () => {
  return (
    <Window>
      <WindowTitle>Umidità del terreno</WindowTitle>
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
