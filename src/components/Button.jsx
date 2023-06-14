import { darken, lighten } from "polished";
import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, color, size, outline, fullwidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
  size: "medium",
  outline: "n",
  fullwidth: "n",
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
      ${({ outline }) =>
        outline === "y" &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
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

const fullwidthStyle = css`
  ${({ fullwidth }) => {
    if (fullwidth === "y")
      return css`
        width: 100%;
        justify-content: center;
        margin-top: 1rem;
        &:not(:first-child) {
          margin-left: 0;
        }
      `;
    else
      return css`
        & + & {
          margin-left: 1rem;
        }
      `;
  }};
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-block;
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
  ${fullwidthStyle}
`;

export default Button;
