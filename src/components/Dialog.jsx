import React, { useEffect, useState } from "react";
import Button from "./Button";
import { css, keyframes, styled } from "styled-components";

const Dialog = ({
  title,
  children,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  visible,
}) => {
  const [animate, setAnimate] = useState("n");
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible 값이 'y' -> 'n'이 되는 것을 감지
    if (localVisible === "y" && visible === "n") {
      setAnimate("y");
      setTimeout(() => {
        setAnimate("n");
      }, 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (animate === "n" && localVisible === "n") return null;
  return (
    <DialogBg disappear={visible}>
      <DialogBlock disappear={visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DialogBg>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const DialogBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear === "n" &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear === "n" &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: right;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

export default Dialog;
