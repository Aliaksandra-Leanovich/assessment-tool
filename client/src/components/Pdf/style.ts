import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.color.primaryLight};
  width: 100%;
  max-width: 500px;
  padding: 60px;
  box-shadow: 0 3px 5px ${(props) => props.theme.color.boxShadow};
  border-radius: 14px;
`;

export const TextSC = styled.p`
  font-size: 25px;
  line-height: 1.5;
`;
