import styled from "@emotion/styled";

export const OptionSC = styled.div`
  position: relative;
  display: block;
  padding: 8px 10px;
  cursor: pointer;
  background-color: transparent;
  transition: border-bottom 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.boxShadow};
  }
`;

export const OptionTextSC = styled.p`
  color: ${(props) => props.theme.color.secondary};
  font-size: 14px;
`;
