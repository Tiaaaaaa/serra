import React, { Component } from "react";
import { render } from "react-dom";
import {
  WindowTitle,
  Body,
  Image,
  Description,
  Data,
  TextContainer,
  ButtonContainer
} from "../../common/style";
import { Window, Button } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_STATE } from "./actions";

export const Luminance = () => {
  const luminance = useSelector(state => state.luminance);
  const dispatch = useDispatch();
  return (
    <Window color={luminance}>
      <WindowTitle>Luminosità</WindowTitle>
      <Body>
        <Image>{luminance ? "💡" : "🌞"}</Image>
        <TextContainer>
          <Description>{luminance ? "Artificiale" : "Naturale"}</Description>
        </TextContainer>
      </Body>
      <ButtonContainer>
        <Button color={luminance} onClick={() => dispatch(CHANGE_STATE())}>
          Cambia
        </Button>
      </ButtonContainer>
    </Window>
  );
};
