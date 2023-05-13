import styled from "@emotion/styled";
export interface IStylesProps {
  currentNumber: boolean;
  answered: boolean;
}

export const NumberSC = styled.button<IStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: ${({ currentNumber, theme }) =>
    currentNumber ? theme.color.primaryLight : theme.color.boxShadow};
  box-shadow: 0 3px 5px ${(props) => props.theme.color.buttonShadow};
  border: 1px solid
    ${({ answered, theme }) =>
      answered ? theme.color.secondary : theme.color.error};
  font-size: 16px;
  font-weight: 500;
  position: relative;
  border-radius: 10px;
`;
