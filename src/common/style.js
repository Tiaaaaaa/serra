import styled from "styled-components";

export const WindowsContainer = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  z-index: 2;
  @media all and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Window = styled.article`
  display: flex;
  justify-content: center;
  padding: 1em;
  margin: 0.5em;
  border-radius: 1rem;
  box-shadow: 0 0.375em 0.65em 0.1625em rgba(0, 0, 0, 0.2);
  min-width: 20%;
  z-index: 3;
  background-color: white;
  flex-direction: column;
`;

export const WindowTitle = styled.h1`
  font-family: helvetica;
  font-size: 1.3em;
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
  margin: 0 0.1em;
  flex: 1;
  box-shadow: 0 0.375rem 0.65rem 0.1625rem rgba(0, 0, 0, 0.31);
  background-color: rgb(255, 255, 255);
`;

export const EmptyButton = styled.div`
  font-size: 1rem;
  margin: 0 0.1em;
  flex: 1;
`;

export const Data = styled.h3`
  font-size: 1em;
  font-family: helvetica;
`;

export const Description = styled.h2`
  font-size: 1em;
  font-family: helvetica;
`;
export const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-left: 0.4em;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Color = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(0deg, #ffffff 36%, #f3fdf3 100%);
`;
