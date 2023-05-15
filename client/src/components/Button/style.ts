import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonVariants } from "../../enums";
import { theme } from "../../ui/colors-config";

import { IButton } from "./types";

const variantStyles = (variant = ButtonVariants.primary) =>
  ({
    primary: css`
      padding: 10px 20px;
      border-radius: 8px;
      transition: background-color 0.4s ease-out;
      color: ${theme.color.primary};
      background-color: ${theme.color.secondary};
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: ${theme.color.error};
      }

      &:disabled {
        background: ${theme.color.primaryLight};
        cursor: "not-allowed";
      }
    `,

    secondary: css`
      width: 50px;
      padding: 4px;
      background: no-repeat center center fixed;
      background-size: cover;
      transition: box-shadow 0.5s ease-out;
      border-radius: 14px;

      &:hover {
        box-shadow: 4px 4px 2px 4px ${theme.color.buttonShadow};
      }
    `,

    signin: css`
      border: none;
      font-size: 18px;
      font-weight: 500;
      color: ${theme.color.secondary};
      background: transparent;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.5s ease-out;

      &:hover {
        border-bottom: 2px solid ${theme.color.secondary};
      }
    `,
  }[variant]);

export const ButtonSC = styled.button<Pick<IButton, "variant">>`
  ${({ variant }) => variantStyles(variant)}

  &:disabled {
    ${({ disabled }) => (disabled ? true : false)};
    color: ${({ disabled }) =>
      disabled ? theme.color.primaryDark : theme.color.primary};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    box-shadow: none;
    border-bottom: 2px solid transparent;
  }
`;
