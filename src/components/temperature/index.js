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

export const Temperature = () => {
  return (
    <Window>
      <WindowTitle>Temperatura</WindowTitle>
      <Body>
        <Image>🌡️</Image>
        <TextContainer>
          <Data>10%</Data>
        </TextContainer>
      </Body>
      <EmptyButton />
    </Window>
  );
};
