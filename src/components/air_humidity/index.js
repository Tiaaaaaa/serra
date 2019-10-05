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

import { useSelector } from "react-redux";
export const AirHumidity = () => {
  const groundHumidity = useSelector(state => state.groundHumidity);
  return (
    <Window>
      <WindowTitle>Umidità dell'aria</WindowTitle>
      <Body>
        <Image>🌫️</Image>
        <TextContainer>
          <Data>{groundHumidity}%</Data>
        </TextContainer>
      </Body>
      <EmptyButton />
    </Window>
  );
};
