import styled from "@emotion/styled";
import { IStylesButton, IStylesProps } from "./types";

export const ContainerQuestionSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  background-color: ${(props) => props.theme.color.primaryLight};
  padding: 24px;
  width: 100%;
  max-width: 800px;
`;

export const TextSC = styled.div<IStylesProps>`
  cursor: pointer;
  display: ${({ edit }) => (edit ? "none" : "block")};
  width: 100%;
`;

export const InputSC = styled.input`
  width: 100%;
  padding-left: 6px;

  &[type="text"] {
    font-size: 15px;
  }
`;

export const FormSC = styled.form<IStylesProps>`
  display: ${({ edit }) => (edit ? "flex" : "none")};
  width: 100%;
  justify-content: space-between;
  column-gap: 4px;
`;

export const ButtonContainerSC = styled.div`
  display: flex;
`;

export const ButtonSC = styled.button`
  svg {
    width: 14px;
    height: 28px;
    fill: ${(props) => props.theme.color.secondary};
    transition: fill 0.3s ease-out;

    &:hover {
      fill: ${(props) => props.theme.color.error};
    }
  }
`;

export const ButtonEditSC = styled.button<IStylesButton>`
  padding: 0 4px;
  height: 28px;
  transition: color 0.4s ease-out;
  color: ${(props) => props.theme.color.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ disabled }) => (disabled ? true : false)};
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.primaryDark : theme.color.secondary};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const CheckboxSC = styled.input<IStylesProps>`
  cursor: pointer;
  display: ${({ edit }) => (edit ? "none" : "block")};
`;
