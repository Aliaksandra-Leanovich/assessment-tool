import styled from "@emotion/styled";
import { IStylesProps } from "./types";

export const NumberSC = styled.button<IStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: ${({ currentNumber, theme }) =>
    currentNumber ? theme.color.secondary : theme.color.primaryLight};
  color: ${({ currentNumber, theme }) =>
    currentNumber ? theme.color.primaryLight : theme.color.secondaryDark};
  border: 1px solid
    ${({ answered, theme }) =>
      answered ? theme.color.secondary : "transparent"};
  font-size: 16px;
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 38px;
    left: 29%;
    background-color: transparent;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.color.secondary};
    display: ${({ currentNumber }) => (currentNumber ? "block" : "none")};
  }
`;
