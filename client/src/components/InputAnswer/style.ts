import styled from "@emotion/styled";

export const InputSC = styled.textarea`
  min-height: 100px;
  width: 100%;
  background: transparent;
  border: none;
  resize: none;
  font-family: inherit;
  font-size: inherit;

  &::placeholder {
    opacity: 0.4;
  }
`;
