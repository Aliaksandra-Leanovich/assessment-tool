import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  padding: 26px 40px;
  border-bottom: ${(props) => props.theme.color.primaryDark} 1px solid;
`;

export const TextSC = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const TextSmallSC = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.color.primaryDark};
  padding-bottom: 26px;
`;

export const ContainerAnswerSC = styled.div`
  padding: 26px 40px;
`;

export const ContainerButtonSC = styled.div`
  width: 100%;
  padding: 0 40px 26px;
  display: flex;
  justify-content: flex-end;
`;
