import styled from "@emotion/styled";

export const ContainerSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const FormSC = styled.form`
  max-width: 800px;
  width: 100%;
  background-color: ${(props) => props.theme.color.primaryLight};
  padding: 16px;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
`;

export const InputSC = styled.input`
  width: 100%;
  padding-left: 4px;
`;

export const ButtonSC = styled.button``;
