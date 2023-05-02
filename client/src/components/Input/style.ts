import styled from "@emotion/styled";

export const StyledInputSC = styled.input`
  font-size: 16px;
  padding: 12px 32px 8px 10px;
  width: 400px;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.4;
  }
`;

export const ContainerSC = styled.div`
  flex-direction: column;
  row-gap: 16px;
`;

export const ErrorMessageSC = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${(props) => props.theme.color.error};
`;

export const WarningTextSC = styled.p`
  font-size: 12px;
  line-height: 14px;
`;
