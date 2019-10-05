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
export const GroundHumidity = () => {
    const groundHumidity = useSelector(state => state.groundHumidity);
  return (
    <Window>
      <WindowTitle>Umidità del terreno</WindowTitle>
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
