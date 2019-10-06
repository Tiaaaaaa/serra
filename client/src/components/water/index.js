import React, { Component } from "react";
import { render } from "react-dom";
import {
  Window,
  WindowTitle,
  Button,
  Body,
  Image,
  Data,
  TextContainer
} from "../../common/style";
import { useSelector, useDispatch } from "react-redux";
import { ADD_WATER } from "./actions";

export const Water = props => {
  const water = useSelector(state => state.water);
  const dispatch = useDispatch();
  return (
    <Window>
      <WindowTitle>Acqua</WindowTitle>
      <Body>
        <Image>💧</Image>
        <TextContainer>
          <Data>{water} ml</Data>
        </TextContainer>
      </Body>
      <button onPointerDown={() => console.log('hello')} >c</button>
      <Button onClick={() => dispatch(ADD_WATER())}>+</Button>
    </Window>
  );
};
