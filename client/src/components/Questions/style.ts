import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  background-color: ${(props) => props.theme.color.primaryLight};
  width: 100%;
  max-width: 900px;
  box-shadow: 0 3px 5px ${(props) => props.theme.color.boxShadow};
  border-radius: 14px;
`;
