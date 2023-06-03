import { useRef } from "react";
import { ReactComponent as CrossIcon } from "../../assets/cross-icon.svg";
import { useOutsideClick } from "../../hooks";
import {
  ButtonSC,
  ContainerButtonSC,
  ContainerChildSC,
  ContainerSC,
  WrapperSC,
} from "./styles";
import { IModalProps } from "./types";

export const Modal = ({ handleClose, show, children }: IModalProps) => {
  const selectRef = useRef(null);

  useOutsideClick(selectRef, () => {
    if (show) {
      handleClose();
    }
  });
  return (
    <WrapperSC show={show} >
      <ContainerSC show={show} ref={selectRef}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <CrossIcon />
          </ButtonSC>
        </ContainerButtonSC>
        <ContainerChildSC>{children}</ContainerChildSC>
      </ContainerSC>
    </WrapperSC>
  );
};
