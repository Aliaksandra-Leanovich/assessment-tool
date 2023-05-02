import styled from "@emotion/styled";

export const StyledHeaderSC = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.color.primaryLight};
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainerSC = styled.a`
  max-width: 40px;
  cursor: pointer;
`;
