import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IStyleProps } from "./types";

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

export const LogoContainerSC = styled.button<IStyleProps>`
  max-width: 40px;
  ${({ disabled }) => (disabled ? true : false)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const LinkSC = styled(Link)`
  font-family: Inter, sans-serif;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.4s ease-out;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.secondary};
  display: flex;

  &:hover {
    background-color: ${(props) => props.theme.color.secondaryDark};
  }
`;
