import { darken, lighten } from "polished";
import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizes = {
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
};

const sizeStyle = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-weight: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 색상 */
  ${colorStyles}

  /* 크기 */
  ${sizeStyle}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default Button;
