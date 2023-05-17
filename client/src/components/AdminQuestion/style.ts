import styled from "@emotion/styled";
import { IStylesProps } from "./types";

export const ContainerQuestionSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.primaryLight};
  padding: 20px;
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
`;

export const FormSC = styled.form<IStylesProps>`
  display: ${({ edit }) => (edit ? "flex" : "none")};
  width: 100%;
  justify-content: space-between;
`;

export const ButtonContainerSC = styled.div`
  display: flex;
`;

export const ButtonSC = styled.button`
  svg {
    width: 14px;
    fill: ${(props) => props.theme.color.secondary};

    transition: fill 0.3s ease-out;

    &:hover {
      fill: ${(props) => props.theme.color.error};
    }
  }
`;

export const ButtonEditSC = styled.button`
  svg {
    width: 14px;
    fill: ${(props) => props.theme.color.secondary};

    transition: fill 0.3s ease-out;

    &:hover {
      fill: ${(props) => props.theme.color.error};
    }
  }
`;
