//Global style
import { createGlobalStyle } from "styled-components";

//Styled components
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(194, 194, 194);
  width: 40%;
  border: black solid;
  border-radius: 10px;
  margin-bottom: 3vh;
  margin-top: 3vh;

  h1 {
    text-align: center;
    font-size: 3vw;
    font-family: cursive;
    color: black;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #5352ed;
  width: 90%;
  justify-content: center;
  margin-left: auto;
  margin-right: 1%;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  border-radius: 20px;

  h2 {
    text-align: center;
    transform: rotate(90deg);
    margin: auto;
    padding: 20px;
    font-size: 5vw;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #70a1ff;
  width: 90%;
  justify-content: center;
  margin-left: 1%;
  margin-right: auto;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  border-radius: 20px;

  h2 {
    text-align: center;
    transform: rotate(-90deg);
    margin-top: auto;
    margin-bottom: auto;
    padding: 20px;
    font-size: 5vw;
  }
`;

const H2Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  width: 25vw;
  object-fit: contain;
  margin: 20px;
`;

const EventText = styled.h3`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 3vw;
  margin: auto;
  padding: 2vw;
  object-fit: fill;
`;

const GoUpWrapper = styled.div` 
  display: flex;
  justify-content: flex-end;
  margin-left: 2vw;
`

const GoUp = styled.a`
  font-size: 7vw;
  text-decoration: none;
`

export {
  GlobalStyle,
  TitleWrapper,
  ListWrapper,
  CardWrapper1,
  CardWrapper,
  H2Wrapper,
  Image,
  EventText,
  GoUp,
  GoUpWrapper,
};
