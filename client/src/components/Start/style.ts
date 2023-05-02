import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 26px;
  background-color: ${(props) => props.theme.color.primaryLight};
  width: 600px;
  padding: 26px 0;
  box-shadow: 0 3px 5px ${(props) => props.theme.color.boxShadow};
  border-radius: 14px;
`;

export const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  text-align: center;
  width: 500px;
  margin: 0 auto;
`;

export const TextMediumBoldSC = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const SpanMediumColorfulSC = styled.span`
  color: ${(props) => props.theme.color.secondary};
`;

export const TextSmallSC = styled.p`
  font-size: 16px;
`;
