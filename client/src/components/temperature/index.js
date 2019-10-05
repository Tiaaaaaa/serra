import React, { Component } from "react";
import { render } from "react-dom";
import {
  Window,
  WindowTitle,
  Body,
  Image,
  Data,
  TextContainer,
  EmptyButton
} from "../../common/style";
import { useSelector, useDispatch } from "react-redux";
export const Temperature = () => {
  const temperature = useSelector(state => state.temperature);
  return (
    <Window>
      <WindowTitle>Temperatura</WindowTitle>
      <Body>
        <Image>🌡️</Image>
        <TextContainer>
          <Data>{temperature} °C</Data>
        </TextContainer>
      </Body>
      <EmptyButton />
    </Window>
  );
};
