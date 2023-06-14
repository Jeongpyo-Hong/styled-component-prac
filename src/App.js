import React from "react";
import { ThemeProvider, styled } from "styled-components";
import Button from "./components/Button";

const App = () => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button size="small">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="large">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="gray" size="small">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="large">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="small">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="large">
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
};

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export default App;
