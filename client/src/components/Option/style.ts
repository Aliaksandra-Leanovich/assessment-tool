import styled from "@emotion/styled";

export const OptionSC = styled.div`
  position: relative;
  display: block;
  padding: 4px 10px;
  margin-bottom: 6px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s ease-out;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.color.secondary};
  }
`;

export const OptionTextSC = styled.p`
  color: ${(props) => props.theme.color.secondary};
  font-size: 16px;
`;
