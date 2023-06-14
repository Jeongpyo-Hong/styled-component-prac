import React, { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const App = () => {
  const [visible, setVisible] = useState("n");

  const onClick = () => {
    setVisible("y");
  };

  const onCancel = () => {
    setVisible("n");
  };

  const onConfirm = () => {
    setVisible("n");
  };

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
      <>
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
          <ButtonGroup>
            <Button size="small" outline="y">
              BUTTON
            </Button>
            <Button color="gray" outline="y">
              BUTTON
            </Button>
            <Button color="pink" size="large" outline="y">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullwidth="y">
              BUTTON
            </Button>
            <Button color="gray" size="large" fullwidth="y">
              BUTTON
            </Button>
            <Button color="pink" size="large" fullwidth="y" onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          cancelText="취소"
          confirmText="삭제"
          onCancel={onCancel}
          onConfirm={onConfirm}
          visible={visible}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
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
