import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  row-gap: 30px;
`;

export const TextMediumBoldSC = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const SpanMediumColorfulSC = styled.span`
  color: ${(props) => props.theme.color.secondary};
  font-weight: 700;
`;

export const TextSmallSC = styled.p`
  font-size: 18px;
`;

export const TextSmallBoldSC = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
