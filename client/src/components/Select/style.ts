import styled from "@emotion/styled";
import { IPropsOpen } from "./types";

export const HtmlSelectSC = styled.select`
  display: none;
`;

export const WrapperSC = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
`;

export const SelectSC = styled.div<IPropsOpen>`
  background: transparent;
  padding: 10px;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.color.secondaryDark};
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  opacity: 1;
  visibility: visible;
  pointer-events: ${({ isOpen }) => (isOpen ? "none" : "all")};
  box-shadow: ${({ isOpen }) =>
    !isOpen
      ? "none"
      : "-1px 1px 2px rgba(67, 70, 74, 0.0001), -2px 2px 5px rgba(67, 86, 100, 0.123689)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "none" : "all")};
`;

export const OptionsSC = styled.div<IPropsOpen>`
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.color.primaryLight};
  transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
  pointer-events: none;
  z-index: 2;
  padding: 8px 8px 8px 0;
  max-height: 200px;
  overflow-y: auto;
  pointer-events: all;
  margin-top: 8px;
  box-shadow: ${(props) => props.theme.color.selectShadow};
  border-radius: 4px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const TriggerSC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ArrowSC = styled.div<IPropsOpen>`
  position: relative;
  height: 8px;
  width: 12px;

  &:before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 100%;
    transition: all 0.5s;
  }

  &::before {
    left: 2px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(45deg)")};
    background-color: ${(props) => props.theme.color.secondary};
  }

  &::after {
    left: -2px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(-45deg)")};
    background-color: ${(props) => props.theme.color.secondary};
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const SelectedOptionSC = styled.p`
  font-size: 16px;
`;
