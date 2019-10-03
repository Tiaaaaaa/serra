import React, { Component } from "react";
import { render } from "react-dom";
import {
  Window,
  WindowTitle,
  Button,
  Body,
  Image,
  Description,
  Data,
  TextContainer,
  ButtonContainer
} from "../../common/style";

export const Luminance = () => {
  return (
    <Window>
      <WindowTitle>Luminosità</WindowTitle>
      <Body>
        <Image>💡</Image>
        <TextContainer>
          <Description>Ottimale</Description>
          <Data>1000 lum</Data>
        </TextContainer>
      </Body>
      <ButtonContainer>
        <Button>-</Button>
        <Button>+</Button>
      </ButtonContainer>
    </Window>
  );
};
