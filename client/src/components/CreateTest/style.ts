import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const TitlelSC = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const TotalSC = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.primaryDark};
`;

export const SelectContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 10px;
  row-gap: 30px;
  width: 100%;
`;

export const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 30px;
`;

export const BottomSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 36px 0 10px;
`;

export const LabelSC = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.color.primaryDark};
`;

export const SelectTitleSC = styled.p`
  font-size: 14px;
`;
