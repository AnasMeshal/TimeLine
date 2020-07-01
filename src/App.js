//React
import React from "react";

//ThemeProvider
import { ThemeProvider } from "styled-components";

//Style
import {
  GlobalStyle,
  TitleWrapper,
  GoUp,
  GoUpWrapper,
} from "./styles";

//Components
import EventList from "./components/EventList";

const theme = {
  backgroundColor: "#ced6e0",
  textColor: "black",
  borderColor: "black",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a href="top"></a>
      <TitleWrapper>
        <h1>Welcome To My Life</h1>
      </TitleWrapper>

      <EventList></EventList>

      <GoUpWrapper>
      <GoUp href="#top">🔼</GoUp>
      </GoUpWrapper>
    </ThemeProvider>
  );
}

export default App;
