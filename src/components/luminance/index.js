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

import { useSelector, useDispatch } from "react-redux";
import { CHANGE_STATE } from "./actions";

export const Luminance = () => {
  const luminance = useSelector(state => state.luminance);
  const dispatch = useDispatch();
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
        <Button onClick={() => dispatch(CHANGE_STATE())}>
          {luminance.toString()}
        </Button>
      </ButtonContainer>
    </Window>
  );
};
