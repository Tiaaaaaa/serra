import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Title } from "./style";

const returnState = () => {
  return "bene";
};

export const StateOfPlant = () => {
  return (
    <Container>
      <Title>La tua pianta si sente {returnState()}</Title>
    </Container>
  );
};
