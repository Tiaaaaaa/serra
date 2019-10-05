import styled from "styled-components";

export const Window = styled.article`
  display: flex;
  justify-content: center;
  padding: 1em;
  margin: 0.5em;
  background-color: ${props => (props.color ? "#E3E3E3" : "#f9ff60")}};
  background-image: ${props =>
    props.color
      ? "white"
      : "linear-gradient(315deg, #f9ff60 0%, #ffef77 74%)"}};
  border-radius: 1rem;
  box-shadow: 0 0.375em 0.65em 0.1625em rgba(0, 0, 0, 0.2);
  min-width: 20%;
  flex-direction: column;
  transition: all 0.2s;
`;
export const Button = styled.button`
  background-color: ${props => (props.color ? "#f9ff60  " : "#E3E3E3")};
  font-weight: 300;
  font-family: helvetica;
  border: none;
  border-radius: 0.4em;
  font-size: 0.9rem;
  margin: 0 0.1em;
  flex: 1;
  box-shadow: 0 0.375rem 0.65rem 0.1625rem rgba(0, 0, 0, 0.31);
  transition: all 0.2s;
`;
