import styled from "styled-components";

export const WindowsContainer = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Window = styled.article`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-radius: 1rem;
  box-shadow: 0 0.375em 0.65em 0.1625em rgba(0, 0, 0, 0.2);
  margin: 0.5em 0;
  min-width: 44%;
  flex-direction: column;
`;

export const WindowTitle = styled.h1`
  font-family: helvetica;
  font-size: 1.5em;
  font-weight: bold;
`;

export const Body = styled.section`
  display: flex;
  padding: 1em 0;
`;

export const Image = styled.div`
  font-size: 4em;
`;

export const Button = styled.button`
  color: rgb(51, 51, 51);
  font-weight: 300;
  font-family: helvetica;
  border: none;
  border-radius: 0.4em;
  font-size: 1rem;
  padding: 0;
  box-shadow: 0 0.375rem 0.65rem 0.1625rem rgba(0, 0, 0, 0.31);
  background-color: rgb(255, 255, 255);
`;
