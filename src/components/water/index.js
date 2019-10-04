import React, { Component } from "react";
import { render } from "react-dom";
import {
  Window,
  WindowTitle,
  Button,
  Body,
  Image,
  Data
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
        <Data>{water}</Data>
      </Body>
      <Button onClick={() => dispatch(ADD_WATER())}>+</Button>
    </Window>
  );
};
