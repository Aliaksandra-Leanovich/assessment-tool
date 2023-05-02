import React from "react";
import { routes } from "../../routes";
import {
  ContainerSC,
  LogoContainerSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import Logo from "../../assets/logoSmall.png";
import { Timer } from "../Timer/Timer";
import { IProps } from "./types";

export const Header = ({ setStatus, status, test, setAnswersToDb }: IProps) => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <LogoContainerSC href={routes.HOME}>
            <img src={Logo} alt="SOFTTECO" />
          </LogoContainerSC>
          <Timer
            setStatus={setStatus}
            status={status}
            test={test}
            setAnswersToDb={setAnswersToDb}
          />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
