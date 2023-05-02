import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary};
`;

export const ImageSC = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainerSC = styled.div`
  max-width: 100%;
  height: 100%;
  background: no-repeat center center fixed;
  background-size: cover;
`;

export const FormContainerSC = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrappperFormSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const LogoSC = styled.img`
  width: 200px;
`;

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
