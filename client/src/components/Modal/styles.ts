import styled from "@emotion/styled";
import { IStylesProps } from "./types";

export const WrapperSC = styled.div<IStylesProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.borderAdvantage};
  z-index: 4;
`;

export const ContainerSC = styled.div<IStylesProps>`
  position: fixed;
  background-color: ${(props) => props.theme.color.primary};
  padding: 20px 26px 60px 40px;
  width: 100%;
  align-self: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: 600px;
  overflow-y: scroll;
`;

export const ContainerButtonSC = styled.div`
  align-self: flex-end;
`;

export const ButtonSC = styled.button<IStylesProps>`
  width: 16px;
  cursor: pointer;

  img {
    svg {
      path {
        fill: ${(props) => props.theme.color.selectShadow};
      }
    }
  }

  &:hover {
    img {
      svg {
        path {
          fill: ${(props) => props.theme.color.selectShadow};
        }
      }
    }
  }
`;

export const ContainerChildSC = styled.div`
  padding: 20px 30px 0 0;
`;
